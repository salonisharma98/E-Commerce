import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { makeStyles } from '@material-ui/core/styles';
import SizeDropdown from './SizeDropdown';
// import QuantityButton from './QuantityButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { addToCart, removeFromCart } from '../../redux/ActionsFolder/CartAction'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  cartBtn: {
    backgroundColor: "burlywood",
    fontSize: "13px",
    paddingLeft: "16px",
    paddingRight: "16px",
    marginRight: "7px",
    marginTop: "15px",
    '&:hover': {
      backgroundColor: 'burlywood',
      boxShadow: 'none',
    },
  },
}))

const Cart = () => {

  const classes = useStyles();

  const [address, setAddress] = useState('');

  const cartItems = useSelector(state => state.Cart.cartItems)

  cartItems.map((e, i) => {
    //console.log(e[0], "EEE")
  })

  const dispatch = useDispatch()

  const [CartType, setCartType] = useState('1')

  //  useEffect(()=>{
  //   console.log(CartType,'in useEffect')
  // },[CartType])
  
  const onDecrese = (ev, product) => {
      setCartType('decrease')
      dispatch(addToCart(product, CartType)) 
  }

  const onIncrease = (ev, product) => {
      setCartType('increase')
      dispatch(addToCart(product, CartType))
  }

  const onAddressType = (e) => {
    setAddress(e.target.value)
  }
  

  return (
    <div>
      <Grid container className="AddressContainer">
        <Grid item>
          <PinDropIcon className="pinIcon" />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" value={address} placeholder="Address" onChange={onAddressType} />
        </Grid>
      </Grid>
      <Grid container className="cart">
        <Grid item xs={8} className="detailOfProductAdded">
          {cartItems.map((val) =>
            <Grid key={val.id} container className="CartProduct">
              <img src={val.productImage} alt="Product" className="ProductIMG" />
              <div>
                <h3 className="heading1">{val.brand}</h3>
                <p>{val.productName}</p>
                <p>Total of Rs {val.amount}</p>
                <div className="quantity">
                  <SizeDropdown />
                  <p className="qty-text"> Qty</p>
                  <button className='qtyBtn' onClick={(ev) => onDecrese(ev, val)} >-</button>
                  <p>{val.count}</p>
                  <button className='qtyBtn' onClick={(ev) => onIncrease(ev, val)}>+</button>
                </div>
                <Button className={classes.cartBtn} onClick={() => {
                  dispatch(removeFromCart(val))
                }}>Remove</Button>
                <Button className={classes.cartBtn}>Place Order</Button>
              </div>
            </Grid>
          )}
        </Grid>
        <Grid item xs={4} className="productTotal">
          <div className="bottomdiv" />
          <div className="bottomdiv2" />

          <div className="PriceDetail">
            <div className="priceDiv">
              <p><strong>Price Details</strong></p>
              <TableContainer>
                <Table className="table" size="small" aria-label="a dense table">
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" >
                        Price()
                      </TableCell>
                      <TableCell align="right">{ }</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" >
                        Size
                      </TableCell>
                      <TableCell align="right">{ }</TableCell>
                    </TableRow>
                    <TableRow></TableRow>
                    <TableRow>
                      <TableCell align="left" >
                        Discount
                      </TableCell>
                      <TableCell align="right">10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" >
                        Delievery Charges
                      </TableCell>
                      <TableCell align="right">Free</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" >
                        Total
                      </TableCell>
                      <TableCell align="right">76543</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>

          <div className="bottomdiv2" />
          <div className="bottomdiv" />
        </Grid>

      </Grid>
    </div>
  )
}
export default Cart;