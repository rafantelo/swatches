import React from 'react';
import classes from './SideMenu.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import PropTypes from 'prop-types'

const sideMenu = (props) => {
  let attachedClasses = [classes.SideMenu, classes.Close];
  if (props.open)
    attachedClasses = [classes.SideMenu, classes.Open];

  return (
    <Aux>
      <Backdrop show={props.showBackdrop} clicked={props.clickedBackdrop} />
      <div className={attachedClasses.join(' ')}>
        <Logo height="9%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

sideMenu.PropTypes = {
  showBackdrop    : PropTypes.bool.isRequired,
  clickedBackdrop : PropTypes.func.isRequired,
  open            : PropTypes.bool.isRequired
}

export default React.memo(sideMenu);