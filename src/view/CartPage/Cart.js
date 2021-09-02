import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { makeStyles } from '@material-ui/core/styles';
// import SizeDropdown from './SizeDropdown';
// import QuantityButton from './QuantityButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { removeFromCart } from '../../redux/ActionsFolder/CartAction'
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
  const [address, setAddress] = useState("");
  const [size, setSize] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const cartItems = useSelector(state => state.Cart.cartItems)

  cartItems.map((e, i) => {
    //console.log(e[0], "EEE")
  })

  const dispatch = useDispatch()
  // const [qty, setQty] = useState(count)

  // const onDecrese = () => {
  //   if(qty>1){
  //   setQty(qty - 1)
  //   }
  //   else{
  //     setQty(1)
  //   }
  // }

  // const onIncrease = () => {
  //   if(qty<10){
  //   setQty(qty + 1)
  //   }
  //   else{
  //     setQty(qty)
  //   }
  // }


  // const handleChange = (event) => {
  //   setSize(event.target.value);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };
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
            <Grid container className="CartProduct">
              <img src={val[0].productImage} alt="Product" className="ProductIMG" />
              <div>
                <h3 className="heading1">{val[0].brand}</h3>
                <p>{val[0].productName}</p>
                <p>Total of Rs {val[0].amount}</p>
                <div className="quantity">
                  <p> Qty</p>
                  <button className='qtyBtn'>-</button>
                  <p>{val.count}</p>
                  <button className='qtyBtn'>+</button>
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
                      <TableCell align="right">{size}</TableCell>
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