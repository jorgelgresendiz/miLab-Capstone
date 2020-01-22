import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddItemPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            nameOfItem: '',
            quantity: '',
            comments: '',
            dateOfArrival: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h1>Add Item</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Item Name</label>
                        <input
                            placeholder="Ex: T75 Flasks"
                            className="form-control"
                            name="nameOfItem"
                            value={this.state.formData.nameOfItem}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            placeholder="Ex: 3"
                            className="form-control"
                            name="quantity"
                            value={this.state.formData.quantity}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Comments</label>
                        <input
                            placeholder="Ex: Please refill at 2"
                            className="form-control"
                            name="comments"
                            value={this.state.formData.comments}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Arrival</label>
                        <input
                            type="Date"
                            className="form-control"
                            name="dateOfArrival"
                            value={this.state.formData.dateOfArrival}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-default"
                        disabled={this.state.invalidForm}
                    >
                        ADD ITEM
                    </button>
                    <div>
                        <Link to='/'>Cancel</Link>
                    </div>
                </form>
            </>
        );
    }
}

export default AddItemPage;