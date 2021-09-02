import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import ProductOptions from '../Common/ProductOptions';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../../redux/ActionsFolder/Action';
import { useParams } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	selectedProductImg: {
		height: "100%",
		width: "100%",
	},
	gridImg: {
		width: "100%",
		height: "100%"
	},
	product: {
		height: "70vh",
		width: "100%",
		objectFit: "fill",
	},
	avtarColor: {
		backgroundColor: "white",
		color: "black",
		border: "1px solid gray"
	},
	FormTextField: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	gridSelectedProduct: {
		minHeight: "140vh"
	},
	finalAddToCartBTN: {
		backgroundColor: "burlywood",
		margin: "7px",
		padding: "10px",
		'&:hover': {
			backgroundColor: 'burlywood',
			boxShadow: 'none',
		},
	},
	finalAddToCart: {
		backgroundColor: "burlywood",
		margin: "7px",
		padding: "10px",
		width: "6px",
		height: "8vh",
		'&:hover': {
			backgroundColor: 'burlywood',
			boxShadow: 'none',
		},
	},
	gridCOntainer: {
		width: "100%",
		height: "70vh",
		marginTop: "20px"
	},
	detalsShown: {
		paddingLeft: "35px"
	},
	SizeDiv: {
		display: "flex"
	}
}));

const ProducSelected = ({cartItems,setCartItems}) => {
	const classes = useStyles();

	const details = useSelector(state => state.userReducer.data)

	const dispatch = useDispatch()

	const [delievery, setDelievery] = useState('')

	const ids = useParams()

	let detailedProducts = []

	details.map(function (e, i) {
		if (e.id === ids.ids) {
			detailedProducts.push(e)
		}
	})

	const onChangeText = (e) => {
		setDelievery(e.target.value)
	}

	const onAdd = (detailedProducts) => {
    console.log('we are in onadd', detailedProducts)
		detailedProducts.map(function(e,i){
			setCartItems([...cartItems, e])
			//localStorage.setItem('cartItems',JSON.stringify(cartItems))
		})
  }

	useEffect(() => {
		dispatch(fetchProductsData())
	}, [])

	return (
		<div>
			{detailedProducts.map((number) =>
				<Grid container className={classes.gridSelectedProduct}>
					<Grid item xs={4} className={classes.gridCOntainer}>
						<img src={number.productImage} alt="product" className={classes.product} />
					</Grid>
					<Grid item xs={8} className={classes.detalsShown}>
						<h1>{number.brand}</h1>
						<p>{number.productName}</p>
						<hr />
						<p><strong>Rs. {number.amount} </strong></p>
						<p>inclusive of all taxes</p>
						<p>Select Size</p>
						<div className={classes.SizeDiv}>
							<div className={classes.root} value='XS' >
								<Avatar className={classes.avtarColor}>XS</Avatar>
							</div>
							<div className={classes.root} value="S">
								<Avatar className={classes.avtarColor} >S</Avatar>
							</div>
							<div className={classes.root} value="L">
								<Avatar className={classes.avtarColor} >L</Avatar>
							</div>
							<div className={classes.root} value="XL">
								<Avatar className={classes.avtarColor} >XL</Avatar>
							</div>
							<div className={classes.root} value="XXL">
								<Avatar className={classes.avtarColor} >XXL</Avatar>
							</div>
						</div>
						<Button className={classes.finalAddToCartBTN} onClick={()=>onAdd(detailedProducts)}>Add To Cart</Button>
						<Button className={classes.finalAddToCartBTN}>Add to Wishlist</Button>
						<hr />
						<h3>Delievery Options</h3>
						<form className={classes.FormTextField} noValidate autoComplete="off">
							<TextField id="outlined-basic" label="Enter Pin Code" variant="outlined" value={delievery} onChange={onChangeText} />
							<Button className={classes.finalAddToCart}>Check</Button>
						</form>
						<small>Please enter PIN code to check delivery time & Pay on Delivery Availability</small>
						<p>
							100% Original Products<br /><br />
							Pay on delivery might be available<br /><br />
							Easy 30 days returns and exchanges<br /><br />
							Try & Buy might be available
						</p>
						<hr />
						<h3>Product Details</h3>
						<small>{number.productName}</small><br />
						<small>of {number.brand}</small><br />
						<small> {number.material}</small><br></br>
					</Grid>
				</Grid>
			)}

		</div>
	)
}
export default ProducSelected;