import React, { useEffect, useContext } from 'react'
import './Cart.css'
import MyContext from '../../MyContext'
import { useNavigate } from 'react-router-dom';
import { Tooltip, Button } from '@mui/material';
// import { Tooltip } from '@mui/material';
// import ButtonAdmin from '../customStyles/ButtonAdmin'

const Cart = ({ removeCartItem, amountCardHandler }) => {
  const { cart } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const allCartProducts = cart.map((item) =>
    <div className="c-card" key={item.id} >
      <div className="c-image">
        <img src={item.image} alt="Item" />
      </div>
      <div className="c-info">
        <p className="c-category">{item.category}</p>
        <h5>{item.title}</h5>
        <h6>{item.price} $</h6>
        {/* <p>{item.description}</p> */}
        <div style={{ display: "flex" }}>
          <Tooltip title="Back to Shop" arrow>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/')}>shop
            </Button>
          </Tooltip>

          <div style={{ backgroundColor: "whitesmoke", fontSize: 22 }}>
            {`amount: ${item.amount}`}
          </div>
          <Tooltip title="Delete 1 Item" arrow>
            <Button
              variant="contained"
              color="error"
              style={{
                // padding: "4px"
              }}
              onClick={() => { removeCartItem(item) }}
            >
              <img src="https://cdn1.iconfinder.com/data/icons/lightly-selected/30/cart-remove-120.png" alt="Icon delete" width="45" height="40" />
            </Button>
          </Tooltip>
        </div>
        {/* <button
              style={{ backgroundColor: 'red', width: '100%' }}
              onClick={removeCartItem}
            >
              remove from cart
            </button> */}
      </div>
    </div >
  )

  return (
    <>
      {/* <div
        className={"products-" + (cart.length > 0 ? "container" : "container-empty")}>
      </div> */}
      <section className={(cart.length > 0 ? "products-container" : "")}>
        <video autoPlay loop muted style={cart.length > 0 ? {
          // position: 'fixed',
          position: 'absolute',
          width: '100%',
          left: '13%',
          top: '0.5%',
          height: '65px',
          objectFit: 'cover',
          transform: "translate(-13%, -5%)",
          // zIndex: '-1'
        } :
          {
            position: 'absolute',
            width: '81%',
            left: '20%',
            top: '6%',
            height: '60px',
            objectFit: 'cover',
            transform: "translate(-13%, -5%)",
            // zIndex: '-1'
          }
        }>
          <source src={"https://ak.picdn.net/shutterstock/videos/1048094620/preview/stock-footage-black-shopping-cart-animation-looped.webm"} type="video/mp4"></source>
        </video>
        {cart.length === 0
          ? <h2 style={{ width: '100%', textAlign: 'center', marginTop: '4em', fontSize: '1.5em' }}>there aren't items in the cart yet.</h2>
          : (cart.length === 1
            ? < div style={{ width: '100%', textAlign: 'center' }}>there is 1 item in cart!</div>
            : <div style={{ width: '100%', textAlign: 'center' }}>there are {cart.length} items in cart</div>,
            allCartProducts
          )
        }
      </section>
    </>
  )

}

export default Cart

