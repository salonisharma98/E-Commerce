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
  useLocation
} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <SearchAppBar />
      <Switch>
        <Route path={`/product/:categoryProduct`}>
          <ProductList/>
        </Route>
        <Route path={`/selected-product/:ids`}>
          <ProducSelected />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    <Footer/> 
    </Router>
  );
}

export default App;
