import './Product.css'
import { useNavigate } from 'react-router-dom'

const Product = ({ id, category, price, title, image, addCartItem, removeCartItem, description, cart }) => {
    const navigate = useNavigate();

    let amount = 0;

    const first4TitleWords = title.split(' ').slice(0, 4).join(' ');
    return (

        <div className="product-card">
            <div className="product-image">
                <a onClick={() => navigate(`/product/${id}`)}>
                    <img src={image} alt="Item" />
                </a>
            </div>
            <div className="product-info">
                <h1 className='c-title'>{first4TitleWords}</h1>
                <h6 style={{ marginTop: '1rem' }}>{price} ₪</h6>
                <p >{category}</p>
                <p style={{ overflow: 'scroll', height: '3em', marginBottom: '1em' }}>{description}</p>

                <div style={{ display: 'flex', height: '3em', }}>
                    <button
                        style={{ width: '100%', border: '1px solid gray' }}
                        onClick={addCartItem}
                    >
                        <img src="https://img.icons8.com/dotty/2x/add-shopping-cart.png" alt="Icon - add to cart" width="50" height="25" />
                    </button>
                    <span style={{ width: '100%', backgroundColor: 'gray' }}>{amount}</span>
                    <button
                        style={{ width: '100%', border: '1px solid gray' }}
                        onClick={removeCartItem}><img src="https://cdn4.iconfinder.com/data/icons/shopping-cart-12/100/remove_cart-256.png" alt="Icon delete" width="50" height="25"
                        /> </button>
                </div>
            </div>
        </div>
    );
}

export default Product