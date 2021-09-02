import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../../redux/ActionsFolder/Action';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import ProductOptions from '../Common/ProductOptions';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		maxWidth: 245,
		margin: "25px",
		boxShadow: "1px 1px 5px 2px rgb(0 0 0 / 20%)",
		display: "inline-block",
		width: "100%"
	},
	ulStyling: {
		listStyle: "none",
	},
	nameOfProducts: {
		backgroundColor: "antiquewhite",
		padding: "1px",
	},
	productlistNAmes: {
		fontSize: "12px",
		marginLeft: "10px",
		textAlign: "left !important",
	},
	iconimg: {
		backgroundColor: "burlywood"
	},
	linkcolor:{
		color:"black",
		textDecoration:"none"
	}
});

const ProductList = ({cartItems,setCartItems}) => {

	const classes = useStyles();

	const statesss = useSelector(state => state.userReducer.data);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductsData())
	}, [])

	const categoryProduct = useParams()

	let getCategorizedProducts = []

		
	statesss.map(function (e, i) {
		if (e.category === categoryProduct.categoryProduct) {
			getCategorizedProducts.push(e)
		}
	})

	// const onAdd = (getCategorizedProducts) => {
  //   console.log('we are in onadd', getCategorizedProducts)
	// 	getCategorizedProducts.map(function(e,i){
	// 		setCartItems([...cartItems, e.id])
	// 		//localStorage.setItem("cart", cartItems)
	// 	})
  // }

	return (
		<div>
			<ProductOptions />
			<ul className={classes.ulStyling}>
				<li>
					{getCategorizedProducts.map((number) =>
						<Card className={classes.root}>
							<Link to={`/selected-product/${number.id}`} key={number.id} className={classes.linkcolor}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Photographs"
										height="240"
										image={number.productImage}
									/>
									<CardContent className={classes.nameOfProducts}>
										<Typography>
											<p className={classes.productlistNAmes}>
												<b>{number.brand}</b>
												<br />
												<small>
													{number.productName}
												</small>
												<br></br>
												<b>Rs.{number.amount}</b>
											</p>
										</Typography>
									</CardContent>
								</CardActionArea>
							</Link>
							<CardActions className={classes.iconimg}>
								<div>
								<FavoriteIcon />
								</div>
								<div >
								<ShoppingCartIcon/>
								</div>
								<div>
								<ShareIcon />
								</div>
							</CardActions>
						</Card>
					)}
				</li>
			</ul>
		</div>
	)
}
export default ProductList;