import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../../redux/ActionsFolder/Action';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
	root: {
		maxWidth: 245,
		margin: "20px",
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
		marginLeft: "10px"
	},
	iconimg: {
		backgroundColor: "burlywood"
	},
});

const ProductList = () => {
	const classes = useStyles();

	const mystate = useSelector(state => state.userReducer.data);
	console.log(mystate, "mystate")

	const dispatch = useDispatch();

	const getData = () => {
		dispatch(fetchProductsData())
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<ul className={classes.ulStyling}>
				<li>
					{mystate.map((number) =>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Photographs"
									height="270"
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
							<CardActions className={classes.iconimg}>
								<FavoriteIcon />
								<ShoppingCartIcon />
								<ShareIcon />
							</CardActions>
						</Card>
					)}
				</li>
			</ul>
		</div>
	)
}
export default ProductList;