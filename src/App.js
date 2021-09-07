import React, { useEffect } from 'react';
import SearchAppBar from './view/Common/Navbar';
import Home from './view/HomePage/Home';
import Footer from './view/Common/Footer';
import ProductList from './view/ListOfProducts/ProductList';
import ProducSelected from './view/SelectedProduct/ProductSelected';
import Cart from './view/CartPage/Cart';
import Wishlist from './view/WishlistPage/Whishlist';
import {SetSize} from './redux/ActionsFolder/CartAction';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';


function App() {
  const dispatch=useDispatch()

  
  return (
    <Router>
      <SearchAppBar />
      <Switch>
        <Route path={`/product/:categoryProduct`}>
          <ProductList />
        </Route>
        <Route path={`/selected-product/:ids`}>
          <ProducSelected />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/wishlist'>
          <Wishlist/>
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
