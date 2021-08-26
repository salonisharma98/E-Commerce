import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import mobile from '../../images/mobile.jpeg';
import yellow from '../../images/yellow.jpg';
import mensFashionPhotograpgy from '../../images/mensFashionPhotograpgy.jpg';
import decor from '../../images/decor.jpeg';
import {makeStyles} from '@material-ui/core/styles';
import kids from '../../images/kids.jpg';
import appliances from '../../images/appliances.jpg';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    boxShadow: "1px 1px 20px 1px grey",
    textAlign: "center",
  },
  category: {
    fontWeight: "lighter",
    textAlign: "center",
    marginTop: "20px",
  },
  avtarDiv: {
    margin: "auto",
    color: "black",
    textAlign: "center",
  },
  options: {
    display: "flex",
    textAlign: "center",
  },
}));

export default function ProductCategory() {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.category}>Category</h1>
      <div className={classes.options}>
        <div className={classes.avtarDiv}>
          <Avatar alt="Mobiles" src={mobile} className={classes.large} />
          <p>Mobiles</p>
        </div>
        <div className={classes.avtarDiv}>
          <Avatar alt="Women's Clothing" src={yellow} className={classes.large} />
          <p>Women's</p>
        </div>
        <div className={classes.avtarDiv}>
          <Avatar alt="Men's Clothing" src={mensFashionPhotograpgy} className={classes.large} />
          <p>Men's</p>
        </div>
        <div className={classes.avtarDiv}>
          <Avatar alt="Home Decor" src={decor} className={classes.large} />
          <p>Home<br />Decor</p>
        </div>
        <div className={classes.avtarDiv}>
          <Avatar alt="Kids" src={kids} className={classes.large} />
          <p>Kids</p>
        </div>
        <div className={classes.avtarDiv}>
          <Avatar alt="Appliances" src={appliances} className={classes.large} />
          <p>Appliances</p>
        </div>
        <div className={classes.avtarDiv}>
          <Avatar alt="Electronics" src={appliances} className={classes.large} />
          <p>Electronics</p>
        </div>
      </div>
    </div>
  );
}
