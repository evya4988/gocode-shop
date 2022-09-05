import React, { useContext } from 'react'
import './Products.css'
import Product from '../product/Product'
import './Loading.css'
import MyContext from '../../MyContext'


const Products = ({ addCartItem, removeCartItem, loading, cart }) => {
    const { productsData, filteredProducts } = useContext(MyContext);
    const currentList = filteredProducts.length > 0 ? filteredProducts : productsData;

    const productListDisplay = currentList.map((product, index) => (
        // <Link to={`/product/${product.id}`}>
            <Product
                key={index}
                id={product.id}
                title={product.title}
                price={product.price}
                // <a href={`/products/${props.id}`} >{product.image}<img /></a >
                image={product.image}
                description={product.description}
                category={product.category}
                addCartItem={() => addCartItem(product)}
                removeCartItem={() => removeCartItem(product)}
                cart={cart}
            />
        //   </Link> 
    ))

    if (!productsData && !filteredProducts) {
        return <span className="smooth spinner" >{ }</span>
    }

    return (
        <>
            {loading &&
                <section className="smooth spinner" >{ }</section>
            }
            {
                <section className="products">{productListDisplay}</section>
            }
        </>
    )
}

export default Products