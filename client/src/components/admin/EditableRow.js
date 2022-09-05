import React from 'react'

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    <div className="table-container">
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="enter a title..."
            name="title"
            value={editFormData.title}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="number"
            required="required"
            placeholder="enter a price..."
            name="price"
            value={editFormData.price}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="enter a image..."
            name="image"
            value={editFormData.image}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="enter a description..."
            name="description"
            value={editFormData.description}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="enter a category..."
            name="category"
            value={editFormData.category}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button type="submit">Save</button>
          <button type="submit" onClick={handleCancelClick}>Cancel</button>
        </td>
      </tr>
    </div>
  )
}

export default EditableRow