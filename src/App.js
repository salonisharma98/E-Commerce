import React, { useEffect, useState } from 'react';
import SearchAppBar from './view/Common/Navbar';
import Home from './view/HomePage/Home';
import Footer from './view/Common/Footer';
import ProductList from './view/ListOfProducts/ProductList';
import ProducSelected from './view/SelectedProduct/ProductSelected';
import Cart from './view/CartPage/Cart';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    console.log('cart',cartItems)
    localStorage.setItem('cart',JSON.stringify(cartItems))
  },[cartItems])

  useEffect(()=>{
    const savedProduct=JSON.parse(localStorage.getItem('cart'))
    if(savedProduct){
      setCartItems(savedProduct)
    }
  },[])
  
  return (
    <Router>
      <SearchAppBar />
      <Switch>
        <Route path={`/product/:categoryProduct`}>
          <ProductList cartItems={cartItems} setCartItems={setCartItems}/>
        </Route>
        <Route path={`/selected-product/:ids`}>
          <ProducSelected cartItems={cartItems} setCartItems={setCartItems}  />
        </Route>
        <Route path='/cart'>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
