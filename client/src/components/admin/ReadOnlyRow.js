import React from 'react'

const ReadOnlyRow = ({ product, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.image}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, product)}>
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteClick(product.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow
