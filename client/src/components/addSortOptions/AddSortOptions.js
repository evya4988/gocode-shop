import React from 'react'
import './AddSortOptions.css'
import AddFilter from '../addFilter/AddFilter';
import AddSort from '../addSort/AddSort'

const AddSortOptions = (props) => {
    return (
        <div className='sort'>
            <AddFilter products={props.products}/>
            <AddSort products={props.products}/>
        </div>
    );
}

export default AddSortOptions