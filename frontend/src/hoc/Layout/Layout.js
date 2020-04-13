import React, { useState } from "react";
import classes from './Layout.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideMenu from '../../components/Navigation/SideMenu/SideMenu';

const layout = (props) => {
  const [sideMenu, setSideMenu] = useState({open: false});

  const closeSideMenuHandler = () => {
    setSideMenu({open: !sideMenu.open});
  }

  const toogleSideMenu = () => {
    setSideMenu({open: !sideMenu.open});
  }
  
  return (
  <Aux>
    <Toolbar toogleSideMenu={toogleSideMenu} />
    <SideMenu open={sideMenu.open} showBackdrop={sideMenu.open} clickedBackdrop={closeSideMenuHandler} />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
)};

export default layout;