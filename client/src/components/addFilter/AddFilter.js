import React, { useContext, useState, useEffect } from 'react'
import MyContext from '../../MyContext'
import './AddFilter.css'

const AddFilter = () => {

    const [category, setCategory] = useState("")
    const { filterProductsByCategory, categories } = useContext(MyContext)

    const handleChange = (value) => {
        filterProductsByCategory(value)
        setCategory(value)
    }
    useEffect(() => {
        return () => {filterProductsByCategory("/")}
    },[])
    const options = categories.map((category, index) => 
    <option key={index} value={category}>{category}</option>)


    return (
        <div className="collection-sort">
            <label>Filter by:</label>
            <select value={category} onChange={(e) => handleChange(e.target.value)}>
                <option value="/">All products</option>
                {categories && options}
            </select>
        </div>
    );
}

export default AddFilter

