import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router';
import * as itemAPI from '../../services/items-api';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
import ItemEditPage from '../ItemEditPage/ItemEditPage';

//has a form to add an item (CREATE)
import AddItemPage from '../../pages/AddItemPage/AddItemPage'

//diplays all items created (READ)
import HomePage from '../HomePage/HomePage'

//page to update and item created (UPDATE)
import userService from '../../utils/userService';
import ItemListPage from '../ItemListPage/ItemListPage';


class App extends Component {
  state = {
    user: userService.getUser(),
    items: []
  };

  /*--- Handle for Item Model ---*/

  handleAddItem = async newItemData => {
    const newItem = await itemAPI.create(newItemData);
    this.setState(state => ({
      items: [...state.items, newItem]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/inventory'));
  }

  handleUpdateItem = async updatedItemData => {
    const updatedItem = await itemAPI.update(updatedItemData);
    const newItemsArray = this.state.items.map(i =>
      i._id === updatedItem._id ? updatedItem : i
    );
    this.setState(
      { items: newItemsArray },
      () => this.props.history.push('/')
    );
  }

  handleDeleteItem = async id => {
    await itemAPI.deleteItem(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      items: state.items.filter(i => i._id !== id)
    }), () => this.props.history.push('/'));
  }

  /*--- Handle for User Model ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const items = await itemAPI.getAll();
    this.setState({ items });
  }


  render() {
    return (
      <div >
        <header className='header-footer'>
          miLab
        </header>
        <Route exact path="/" render={() =>
          <HomePage
            handleAddItem={this.handleAddItem}
            items={this.state.items}
            handleSignupOrLogin={this.handleSignupOrLogin}
            handleLogout={this.handleLogout}
            user={this.state.user}
          />
        }
        />
        <Route exact path="/login" render={() =>
          <LoginPage
            handleAddItem={this.handleAddItem}
            items={this.state.items}
            handleSignupOrLogin={this.handleSignupOrLogin}
            handleLogout={this.handleLogout}
            user={this.state.user}
          />
        }
        />
        <Route exact path="/signup" render={() =>
          <SignupPage
            handleAddItem={this.handleAddItem}
            items={this.state.items}
            handleSignupOrLogin={this.handleSignupOrLogin}
            handleLogout={this.handleLogout}
            user={this.state.user}
          />
        }
        />
        <Route exact path="/additem" render={() => (
          <AddItemPage
            handleAddItem={this.handleAddItem}
            items={this.state.items}
            user={this.state.user}
          />
        )}
        />
        <Route exact path="/inventory" render={() =>
          <ItemListPage
            handleLogout={this.handleLogout}
            user={this.state.user}
            items={this.state.items}
            handleDeleteItem={this.handleDeleteItem}
          />
        }
        />
        <Route exact path="/details" render={({ location }) =>
          <ItemDetailPage
            location={location}
          />
        }
        />
        <Route exact path="/edit" render={() =>
          <ItemEditPage
            handleLogout={this.handleLogout}
            user={this.state.user}
            items={this.state.items}
            handleDeleteItem={this.handleDeleteItem}
          />
        }
        />
      </div>
    )
  }
}

export default withRouter(App);
