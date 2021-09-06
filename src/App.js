import React, { useEffect } from 'react';
import SearchAppBar from './view/Common/Navbar';
import Home from './view/HomePage/Home';
import Footer from './view/Common/Footer';
import ProductList from './view/ListOfProducts/ProductList';
import ProducSelected from './view/SelectedProduct/ProductSelected';
import Cart from './view/CartPage/Cart';
import Wishlist from './view/WishlistPage/Whishlist';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [size, setSize] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Router>
      <SearchAppBar />
      <Switch>
        <Route path={`/product/:categoryProduct`}>
          <ProductList />
        </Route>
        <Route path={`/selected-product/:ids`}>
          <ProducSelected handleChange={handleChange} size={size} handleClose={handleClose} handleOpen={handleOpen} open={open}/>
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
