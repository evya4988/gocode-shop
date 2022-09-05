import React, { useState, useContext } from 'react'
import './AdminActions.css';
import MyContext from '../../MyContext'

const AdminActions = () => {
  const { setProductsData, categories } = useContext(MyContext);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [category, setCategory] = useState('')
  // const [isFormValid, setIsFormValid] = useState(true);
  const [error, setError] = useState([])

  const handleSubmitProductAdding = () => {
    let isValid = true
    setError([])
    if ((title && title.length < 3) /** || title.length > 30 */) {
      setError(prev => [...prev, 'the title is too short, check it please '])
      isValid = false
    }
    // if ((description && description.length < 3) || description.length > 60) {
    //   setError(prev => [...prev, 'the description is too short or too long, check it please! '])
    //   isValid = false
    // }
    if (!category && !imageUrl /** && !description */ && !title && !price) {
      setError(prev => [...prev, 'the fields is empty, please fill them! '])
      isValid = false
    } else if (price && price < 1) {
      setError(prev => [...prev, 'the price must be higher then zero '])
      isValid = false
    } else if (price > 999) {
      setError(prev => [...prev, 'too high of a price!'])
      isValid = false
    } else if (!price) {
      setError(prev => [...prev, 'Insert a price!'])
      isValid = false
    } else if (!category || !imageUrl /** || !description */ || !title || !price) {
      setError(prev => [...prev, 'one or more of the mandatory fields is empty! '])
      isValid = false
    }

    if (!isValid) {
      console.log('form isn\'t valid!!');
      return
    }

    // if(error.length === 0) {
    //   setIsFormValid(true);
    // }


    const newProduct = { id: Date.now(), title, description, price, category, image: imageUrl/** , rating: { rate: 4.0, count: 120 } */ }
    setProductsData(prev => [newProduct, ...prev])
    setTitle('')
    setDescription('')
    setImageUrl('')
    setPrice('')
    setCategory('')
    console.log(newProduct);
  }


  return (
    <div className="new-expense__controls">
      <div className={"new-expense__control"}>
        <label>title:</label>
        <input value={title} maxLength={30} placeholder='enter your new product title' onChange={(e) => { setTitle(e.target.value) }} />
      </div>
      {/* <div className={"InputWrapper"}>
        <label>description:</label>
        <input value={description} placeholder='enter your new product description' onChange={(e) => { setDescription(e.target.value) }} />
      </div> */}
      <div className={"new-expense__control"}>
        <label>price:</label>
        <input type={"number"} value={price} placeholder='enter your new product price' onChange={(e) => { setPrice(e.target.value) }} />
      </div>
      <div className={"new-expense__control"}>
        <label>url:</label>
        <input value={imageUrl} placeholder='enter your new product url' onChange={(e) => { setImageUrl(e.target.value) }} />
      </div>
      <div className={"new-expense__control"}>
        <label>categories:</label>
        <select className={"new-expense__control"} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=""> Select Box</option>
          {categories && categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
        </select>
      </div>
      <div className='new-expense__actions'>
        <button /** disabled={!isFormValid}  */ onClick={handleSubmitProductAdding}>SUBMIT</button>
      </div>
      {error.length > 0 && error.map((err, index) => <div style={{ marginTop: '0.5em', color: 'red' }} key={index}>{err}</div>)}
    </div>
  )
}

export default AdminActions