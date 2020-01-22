import React from 'react';
import { Link } from 'react-router-dom';

function ItemListItem({ item, handleDeleteItem }) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{item.name}</h3>
            </div>
            <div className='panel-footer ItemListItem-action-panel'>
                <Link
                    className='btn btn-xs btn-info'
                    to={{
                        pathname: '/details',
                        state: { item }
                    }}
                >
                    DETAILS
        </Link>
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                        pathname: '/edit',
                        state: { item }
                    }}
                >
                    EDIT
        </Link>
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteItem(item._id)}
                >
                    DELETE
        </button>
            </div>
        </div>
    );
}

export default ItemListItem;