import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import ItemListItem from '../../components/ItemListItem/ItemListItem'


function ItemListPage(props) {
    return (
        <>
            <div>
                <NavBar
                    user={props.user}
                    handleLogout={props.handleLogout}
                />
            </div>
            <h1>My Inventory</h1>
            {props.items.map(item =>
                <ItemListItem
                    item={item}
                    key={item._id}
                    handleDeleteItem={props.handleDeleteItem}
                />
            )}
        </>
    );
}

export default ItemListPage;

