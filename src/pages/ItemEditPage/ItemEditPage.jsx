import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemEditPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.item
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateItem(this.state.formData);
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
                <h1>Edit Item</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Item Name </label>
                        <input
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
                            className="form-control"
                            name="quantity"
                            value={this.state.formData.quantity}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Arrival</label>
                        <input
                            className="form-control"
                            name="dateOfArrival"
                            value={this.state.formData.dateOfArrival}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Comments</label>
                        <input
                            className="form-control"
                            name="comments"
                            value={this.state.formData.comments}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-xs"
                        disabled={this.state.invalidForm}
                    >
                        SAVE ITEM
            </button>&nbsp;&nbsp;
            <Link to='/'>CANCEL</Link>
                </form>
            </>
        );
    }
}

export default ItemEditPage;