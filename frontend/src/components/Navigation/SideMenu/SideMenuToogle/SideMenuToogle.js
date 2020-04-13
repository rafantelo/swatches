import React from 'react';
import classes from './SideMenuToogle.css';

const sideMenuToogle = (props) => {
  return (
    <div className={classes.SideMenuToogle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default React.memo(sideMenuToogle);