import React from 'react';
import classes from './NavigationItem.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink 
        exact={props.exact}
        to={props.link} 
        activeClassName={classes.active}>
          {props.children}
      </NavLink>
    </li>
  );
}

navigationItem.PropTypes = {
  link: PropTypes.string.isRequired
}

export default React.memo(navigationItem);