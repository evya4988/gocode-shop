import React, { useState, useEffect } from 'react';
import App from './components/App';
import {
    BrowserRouter,
    Routes,
    Route,
    // Link,
    NavLink,
} from "react-router-dom";
import MyContext from './MyContext';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import NotFound from './notFound/NotFound';
import AdminTable from './components/admin/AdminTable';
import DetailProductPage from './components/detailProductPage/DetailProductPage';
import { useClock } from './customHooks/useClock';
import IconButton from "@mui/material/IconButton";
import PunchClockIcon from '@mui/icons-material/PunchClock';
import './StyledLink.css';
import axios from 'axios';


const Routing = () => {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isAdmin, setisAdmin] = useState(true);
    const clock = useClock();

    // get api + set loading - fetch api
    // useEffect(() => {
    //     const getApiAnswer = async () => {
    //         try {
    //             const response = await fetch('https://gocode-bituach-yashir.glitch.me/products')
    //             const dataFromApi = await response.json()

    //             setProductsData(dataFromApi);
    //             setLoading(false);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getApiAnswer();
    // }, [])

    // get api + set loading - fetch from DB
    useEffect(() => {
        const getApiAnswer = async () => {
            try {
                const productsUrl = 'http://localhost:7000/api/products';
                const response = await axios.get(productsUrl);
                console.log(response)
                const data = await response.data;
                setProductsData(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getApiAnswer();
    }, [])

    // useEffect(() => {
    //   console.log(productsData)
    // }, [productsData])

    const categories = productsData
        .map(p => p.category)
        .filter((value, index, array) => array.indexOf(value) === index);

    const filterProductsByCategory = (category) => {
        if (category === "/") {
            setFilteredProducts(productsData);
            return;
        }
        const filteredItems = productsData.filter((product) => product.category === category);
        setFilteredProducts(filteredItems);
    }

    const addCartItem = (product) => {
        const productInCart = cart.findIndex((item) => item._id === product._id);
        if (productInCart === -1) {
            const newCartItems = { ...product, amount: 1 };
            setCart((prev) => [newCartItems, ...prev]);
        } else {
            const newCartItems = [...cart];
            newCartItems[productInCart].amount++;
            setCart(newCartItems);
        }
    };

    const removeCartItem = (product) => {
        const productInCart = cart.findIndex((item) => item._id === product._id);
        if (productInCart === -1) {
            return;
        }
        if (cart[productInCart].amount === 1) {
            const newCartItems = cart.filter((item) => item._id !== product._id);
            setCart(newCartItems);
            return
        } else {
            const newCartItems = [...cart];
            newCartItems[productInCart].amount--;
            setCart(newCartItems);
        }
    };

    // let amountCardHandler;
    // let amount = 0;
    // useEffect(() => {
    //     amountCardHandler = (cardId) => {
    //         const findIdInCart = cart.findIndex((product) => product.id == cardId);
    //         console.log("cart: " + findIdInCart)
    //         if (findIdInCart !== -1) {
    //             amount = cart[findIdInCart].amount
    //             console.log("There is item in cart" + amount)
    //         }
    //     }

    //     console.log("cart => " + cart)
    // }, [cart]);

    return (
        <MyContext.Provider
            value={{
                productsData,
                filteredProducts,
                filterProductsByCategory,
                loading,
                cart,
                categories,
                setProductsData
            }}
        >
            <BrowserRouter>
                {/* <NavUnlisted> */}
                <NavLink to="/" className="active-link"> Home</NavLink>
                {/* <Button to="/about"> about </Button> */}
                <NavLink to="/about" className="active-link">
                    About
                </NavLink>
                {/* <Link to="/cart"> cart </Link> */}
                {isAdmin && <NavLink to="/admin" className="active-link">Admin</NavLink>}
                {/* </NavUnlisted> */}

                <span>
                    <IconButton
                        style={{
                            display: "inline-flex",
                            alignSelf: "flex-start",
                            marginLeft: "115vh",
                            color: "lightgray",
                            fontSize: "20px"
                        }}
                        // aria-label="add an alarm"
                        variant="outline"
                        sx={{ m: -1 }}>
                        <span >{clock}</span>
                        <PunchClockIcon style={{ color: "rgb(142, 135, 86)" }} />
                    </IconButton>
                </span>
                {/* {
                isLoggedIn ? ( */}
                <Routes>
                    <Route path="/" element=
                        {<App
                            addCartItem={addCartItem}
                            removeCartItem={removeCartItem}
                            cart={cart}
                            loading={loading}
                        />

                        }
                    />
                    <Route path="about" element={<About />} />
                    <Route path="cart" element=
                        {<Cart removeCartItem={removeCartItem} /** amountCardHandler={amountCardHandler} */ />}
                    />
                    <Route path="product/:id" element={<DetailProductPage addCartItem={addCartItem} />} />
                    <Route path="admin" element={<AdminTable loading={loading} />} />
                    {/* <Route path="admin" element={<AdminActions />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {/* ) : */}
                {/* <Routes>
                        <Route path="login" element={<NotFound />} />
                        <Route path="register" element={<NotFound />} />
                    </Routes> */}
                {/* } */}
            </BrowserRouter>
        </MyContext.Provider>
    );
}

export default Routing
