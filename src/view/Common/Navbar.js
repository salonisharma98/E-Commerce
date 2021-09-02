import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navcolor: {
    backgroundColor: "#986da2",
  },
  iconsForOptions: {
    display: "flex",
  },
  iconsMargin: {
    marginLeft: "10px",
    marginRight: "10px",
    fontSize: "11px",
    textAlign: "center"
  },
  title: {
    marginRight: 50,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    //marginLeft: 0,
    width: '100%',
    margin: "auto",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    display: 'flex',
  },

}));

export default function SearchAppBar() {

  const classes = useStyles();
  const history=useHistory();

  const goToCart=()=>{
    history.push('/cart')
  }

  return (
    <div>
      <AppBar position="static" className={classes.navcolor}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.iconsForOptions}>
            <div className={classes.iconsMargin}>
              <PersonIcon />
              <br />
              Login
            </div>
            <div className={classes.iconsMargin}>
              <FavoriteIcon />
              <br />
              Wishlist
            </div>
            
            <div className={classes.iconsMargin} onClick={goToCart}>            
              <ShoppingCartIcon/>              
              <br />
              Cart
            </div>
           
            <div className={classes.iconsMargin}>
              <MoreVertIcon />
              <br />
              More
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
