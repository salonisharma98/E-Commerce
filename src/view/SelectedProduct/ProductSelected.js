import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ProductOptions from '../Common/ProductOptions';
import shoes from '../../images/shoes.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../../redux/ActionsFolder/Action';

const useStyles = makeStyles((theme) => ({
	selectedProductImg: {
		height: "100%",
		width: "100%",
	},
	gridImg: {
		width: "100%",
		height: "100%"
	},
}));

const ProducSelected = () => {
	const classes = useStyles();

	const details=useSelector(state=>state.userReducer.data)
	console.log(details,"details")
	const dispatch=useDispatch()
	useEffect(()=>{
		dispatch(fetchProductsData())
	},[])
	return (
		<div>
			<ProductOptions />
			<Grid container>
				<Grid item xs={5} className={classes.gridImg}>
					<img src={shoes} className={classes.selectedProductImg}></img>
				</Grid>
				<Grid item xs={7}>
					<h1>
						{details.brand}
					</h1>
				</Grid>
			</Grid>
		</div>
	)
}
export default ProducSelected;