import React from 'react';
import classes from './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button 
      className={classes.Button}
      {...props}
    >
      {props.name}
    </button>
  );
}

Button.proptype = {
  name: PropTypes.string.isRequired
}

export default Button;