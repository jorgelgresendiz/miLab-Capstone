import React from 'react';
import ItemListItem from '../../components/ItemListItem/ItemListItem'
// import { getAll } from '../../services/items-api';

function ItemListPage(props) {
    return (
        <>
            <h1>Item List</h1>
            <div className='ItemListPage-grid'>
                {props.items.map(item =>
                    <ItemListItem
                        item={item}
                        handleDeleteItem={props.handleDeleteItem}
                        key={item._id}
                    />
                )}
            </div>
        </>
    );
}

export default ItemListPage;

