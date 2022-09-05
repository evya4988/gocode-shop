import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MyContext from '../../MyContext';
import './DetailProductPage.css';

const DetailProductPage = ({ addCartItem }) => {
  const { id } = useParams();
  const { productsData } = useContext(MyContext);
  const [singleItem, setSingleItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const itemPage = productsData.find((product) => product.id == id);
    setSingleItem(itemPage);

    console.log(itemPage?.id);
  }, [productsData])

  // const first4TitleWords = singleItem.title.split(' ').slice(0, 5).join(' ');

  return (
    // <div>jguoo</div>
    <div className="product-page">
      <div className="c-card-detail">
        <div className="c-image-detail">
          <img src={singleItem?.image} alt="Item" />
        </div>
        <div className="c-info-detail">
          <h1 className='c-title-detail'>{singleItem?.title}</h1>
          <h6 style={{ marginTop: '1rem' }}>{singleItem?.price} ₪</h6>
          <p >{singleItem?.category}</p>
          <p style={{ overflow: 'scroll', height: '3em' }}>{singleItem?.description}</p>

          <div style={{ display: 'flex', height: '3em', }}>
            <button
              style={{ width: '100(%', border: '1px solid gray' }}
              onClick={addCartItem}
            >
              <img src="https://img.icons8.com/dotty/2x/add-shopping-cart.png" alt="Icon - add to cart" width="50" height="25" />
            </button>
            <span className="btn" style={{ width: '100%', backgroundColor: 'gray' }}>{ }</span>
            <button
              className='btn'
              onClick={() => navigate('/')}
            >
              Back to Shop
            </button>
            <button onClick={() => navigate('/cart')}>cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProductPage