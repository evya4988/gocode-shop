import React, { useState, useContext } from 'react'
import './AdminTable.css'
import MyContext from '../../MyContext'
import { nanoid } from 'nanoid'
import ReadOnlyRow from './ReadOnlyRow'
import EditableRow from './EditableRow'

const AdminTable = ({ loading }) => {
    const { productsData, setProductsData } = useContext(MyContext);
    const [error, setError] = useState(false);

    const [addFormData, setAddFormData] = useState({
        title: "",
        price: "",
        image: "",
        description: "",
        category: "",
    });

    const [editFormData, setEditFormData] = useState({
        title: "",
        price: "",
        image: "",
        description: "",
        category: "",
    })

    const [editProductId, setEditProductId] = useState(null);
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        // console.log("price is " + newFormData.price);
        setError(false);
        if (newFormData.price <= 0) {
            // console.log("price from if " + newFormData.price);
            setError(true)
            // console.log("error " + error);
        } 
        // console.log("error outside if " + error);
        setAddFormData(newFormData)
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            id: nanoid(),
            title: addFormData.title,
            price: addFormData.price,
            image: addFormData.image,
            description: addFormData.description,
            category: addFormData.category
        }

        const newProducts = [newProduct, ...productsData]
        if (!error) {
            setProductsData(newProducts);
            // console.log("new Product ID: " + newProduct.id);
            handleReset();
        } else {
            alert('the price must be higher then zero');
            handleReset();

        }
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        // addFormData.setState({
        //     // addFormData: [{}]
        // });
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedProduct = {
            id: editProductId,
            title: editFormData.title,
            price: editFormData.price,
            image: editFormData.image,
            description: editFormData.description,
            category: editFormData.category
        }

        const newProducts = [...productsData];

        const index = productsData.findIndex((product) => product.id === editProductId);
        newProducts[index] = editedProduct;

        setProductsData(newProducts);
        setEditProductId(null);
    }

    const handleEditClick = (event, product) => {
        event.preventDefault();
        setEditProductId(product.id);

        const formValues = {
            title: product.title,
            price: product.price,
            image: product.image,
            description: product.description,
            category: product.category
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditProductId(null);
    }

    const handleDeleteClick = (productId) => {
        const newProducts = [...productsData];

        const index = productsData.findIndex((product) => product.id === productId);

        newProducts.splice(index, 1);

        setProductsData(newProducts);
    }

    return (
        <div className="table-container">
            <h2>Add new Product</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="title"
                    minLength={3}
                    required="required"
                    placeholder="Enter a Title..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="number"
                    name="price"
                    maxLength="3"
                    required="required"
                    placeholder="Enter a Price..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="image"
                    required="required"
                    placeholder="Enter an Image..."
                    onChange={handleAddFormChange}
                />
                <input
                    className="c-longItem"
                    type="text"
                    name="description"
                    minLength={3}
                    required="required"
                    placeholder="Enter a Description..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="category"
                    minLength={3}
                    required="required"
                    placeholder="Enter a Category..."
                    onChange={handleAddFormChange}
                />
                <button type="submit" /**onClick={clearFormHandler}*/>Add</button>
            </form>

            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading &&
                            <section className="smooth spinner" >{ }</section>
                        }
                        {productsData.map((product) => (
                            <>
                                {
                                    editProductId === product.id ?
                                        <EditableRow
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                        />
                                        :
                                        <ReadOnlyRow
                                            product={product}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />
                                }
                            </>
                        ))}

                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default AdminTable





//  const handleAddFormChange = (event) => {
//         event.preventDefault();  

//         const fieldName = event.target.getAttribute('name');
//         const fieldValue = event.target.value;

//         const newFormData = { ...addFormData };
//         newFormData[fieldName] = fieldValue;
//         if (newFormData.price < 1) {
//             setError(true)
//             const newFormData = { ...addFormData };
//             newFormData[fieldName] = fieldValue;
//         } else {
//             console.log("price " + newFormData.price);
//             setAddFormData(newFormData);
//         }

//     }

//     const handleAddFormSubmit = (event) => {
//         event.preventDefault();

//         const newProduct = {
//             id: nanoid(),
//             title: addFormData.title,
//             price: addFormData.price,
//             image: addFormData.image,
//             description: addFormData.description,
//             category: addFormData.category
//         }

//         const newProducts = [newProduct, ...productsData]
//         if (!error) {
//             setProductsData(newProducts);
//             handleReset();
//             console.log("new Product ID: " + newProduct.id);
//         } else {
//             alert('the price must be higher then zero');
//         }
//     }