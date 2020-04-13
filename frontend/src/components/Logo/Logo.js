import React from 'react';
import classes from './Logo.css';
import mylogo from "../../assets/images/logo.png";

const logo = (props) => {
  return (
    <div className={classes.Logo} style={{height: props.height}} >
      <img src={mylogo} alt="logo" />
    </div>
  );
}

export default logo;