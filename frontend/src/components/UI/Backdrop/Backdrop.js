import React from 'react';
import classes from './Backdrop.css';
import PropTypes from 'prop-types';

const backdrop = (props) => (
  (props.show) ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

backdrop.PropTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
}

export default React.memo(backdrop);