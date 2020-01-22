import React from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{item.nameOfItem}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Quantity</dt>
                    <dd>{item.quantity}</dd>
                    <dt>Comments</dt>
                    <dd>{item.comments}</dd>
                    <dt>Date of Arrival</dt>
                    <dd>{item.dateOfArrival}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
}

export default ItemCard;