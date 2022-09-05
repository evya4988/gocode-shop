import React from 'react'
import './AddSort.css'

const AddSort = ({ products }) => {

    // let categories = []
    // useEffect(() => {
    //     categories = products
    //         .map (p => p)
    //         .filter((value, index, array) => array.indexOf(value) === index);
    //     console.log(categories)

        /** 
         categories = products
        .map((item, index) => (item[index]))
        console.log(categories)
         */
    // }, [products])


    // { categories.map((item, index) => <option key={index} value={item}>{item}</option>) }

    return (
        <div className="collection-sort">
            <label>Sort by:</label>
            <select>
                <option value="/">Featured</option>
                <option value="/">Best Selling</option>
                <option value="/">Alphabetically, A-Z</option>
                <option value="/">Alphabetically, Z-A</option>
                <option value="/">Price, low to high</option>
                <option value="/">Price, high to low</option>
                <option value="/">Date, new to old</option>
                <option value="/">Date, old to new</option>
            </select>
        </div>
    );
}

export default AddSort