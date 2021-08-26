import React from 'react';
import SearchAppBar from './view/Common/Navbar';
import Home from './view/HomePage/Home';
import Footer from './view/Common/Footer';
import ProductList from './view/ListOfProducts/ProductList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <SearchAppBar/>
      <Switch>
      <Route path='/product'> <ProductList/></Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>   
      <Footer/>
    </Router>
  );
}

export default App;
