import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import SideMenuToogle from '../SideMenu/SideMenuToogle/SideMenuToogle';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <SideMenuToogle clicked={props.toogleSideMenu} />
      <Logo height="100%" />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default toolbar;