// import React, { useState } from 'react';
// import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   quantity:{
//    color:"dimgray",
//    display:"flex",
//    marginLeft: "30px",
//     marginTop: "7px",
//   },
//   qtyBtn:{
//     // backgroundColor: "burlywood",
//     fontSize: "16px",
//     height: "26px",
//     margin:"auto",
//     border:"none",
//     padding: "8px",
//     marginLeft: "12px",
//     marginRight: "12px",
//     border: "none",
//     boxShadow: "1px 1px 2px 1px #986da2",
//   }
// }))

// const QuantityButton=({onDecrese,onIncrease,qty})=>{
//   const classes = useStyles();
//   return(
//     <div className={classes.quantity}>
//      <p> Qty</p>
//       <button onClick={onDecrese} className={classes.qtyBtn}>-</button>
//       <p>{qty}</p>
//       <button onClick={onIncrease} className={classes.qtyBtn}>+</button>
//     </div>
//   )
// }
// export default QuantityButton;