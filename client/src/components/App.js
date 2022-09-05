import './App.css';
import NavBar from './navBar/NavBar'
import Products from './products/Products'

function App({ addCartItem, removeCartItem, loading, cart }) {

  return (
    <>
      <NavBar />
      <Products
        addCartItem={addCartItem}
        removeCartItem={removeCartItem}
        loading={loading}
        cart={cart}
      />
    </>
  )
}

export default App;


// {
//   loading &&
//   // <main /**className="spinner-examples"*/>
//   //   <div /**className="example"*/>
//   <span className="smooth spinner" />
//   //   </div>
//   // </main>
// }