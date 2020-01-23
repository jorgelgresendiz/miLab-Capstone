import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCard.css'

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
                    <dt>Date of Arrival</dt>
                    <dd>{item.dateOfArrival}</dd>
                    <dt>Comments</dt>
                    <dd>{item.comments}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link to='/inventory'>Back to My Inventory</Link>
            </div>
        </div>
    );
}

export default ItemCard;