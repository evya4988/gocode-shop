import React from 'react'
import AddSortOptions from '../addSortOptions/AddSortOptions';
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

const NavBar = (props) => {
    const navigate = useNavigate();
    return (
        <nav className="product-filter">
            <div onClick={() => { navigate('/cart') }}>
                <video autoPlay loop muted style={{
                    position: 'fixed',
                    width: '100%',
                    left: '-32%',
                    top: '90%',
                    height: '65px',
                    transform: "translate(-13%, -5%)",
                    cursor: 'alias',
                    zIndex: '-1' 
                }}>
                    <source src={"https://ak.picdn.net/shutterstock/videos/1088491549/preview/stock-footage--k-animated-shopping-cart-fulling-shopping-bags-cargo-boxes-and-gifts-flat-animation-of-a-fully.webm"} type="video/mp4"></source>
                </video>
            </div>
            <h1>Welcome to
                {' '}
                <span style={{ verticalAlign: 'text-top', color: '#118d13', letterSpacing: 2 }}>F</span>
                <span style={{ verticalAlign: 'text-bottom', color: 'purple', letterSpacing: 2 }}>A</span>
                <span style={{ verticalAlign: 'text-top', color: 'brown', letterSpacing: 2 }}>S</span>
                <span style={{ verticalAlign: 'text-bottom', color: 'orange', letterSpacing: 2 }}>H</span>
                <span style={{ verticalAlign: 'text-top', color: 'lightblue', letterSpacing: 2 }}>I</span>
                <span style={{ verticalAlign: 'text-bottom', color: 'gold', letterSpacing: 2 }}>O</span>
                <span style={{ verticalAlign: 'text-top', color: 'silver', letterSpacing: 4 }}>N</span>
                {' '}
                <span style={{ verticalAlign: 'text-bottom', color: 'red', letterSpacing: 2 }}>A</span>
                <span style={{ verticalAlign: 'text-top', color: 'teal', letterSpacing: 2 }}>R</span>
                <span style={{ verticalAlign: 'text-bottom', color: 'pink', letterSpacing: 2 }}>T</span>
                {' '}
                store </h1>

            <div>
                <div
                    onClick={() => { navigate('/cart') }}
                    style={{
                        marginRight: '1em',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                >
                    {/* go to cart */}
                    <img src="https://image.shutterstock.com/image-vector/shopping-cart-icon-flat-design-600w-259703696.jpg" alt='cart icon' width="70" height="50" />
                </div>
            </div>
            <AddSortOptions products={props.products} />
        </nav>
    );
}

export default NavBar