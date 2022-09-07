import React from 'react'
import './AddSortOptions.css'
import AddFilter from '../addFilter/AddFilter';
import AddSlider from '../addSlider/AddSlider'

const AddSortOptions = (props) => {
    return (
        <div className='sort'>
            <AddFilter products={props.products}/>
            <AddSlider products={props.products}/>
        </div>
    );
}

export default AddSortOptions