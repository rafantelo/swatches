import React from 'react';
import classes from './ErrorMessage.css';
import errorIcon from '../../../assets/images/error.png';
import * as util from '../../../util';

const ErrorMessage = (props) => {
  const errorName    = util.resolvePath(props.dataError, 'response.data.ERROR_CODE', undefined) 
                       || util.resolvePath(props.dataError, 'name', undefined) 
                       || util.resolvePath(props.dataError, 'code', undefined) 
                       || "Error";
  const errorMessage = util.resolvePath(props.dataError, 'response.data.ERROR_INFO', undefined) 
                       || util.resolvePath(props.dataError, 'message', undefined) 
                       || "Ups, something went wrong.";

  return (
    <div className={classes.ErrorMessage} style={{width: props.errorWidth}}>
      <img src={errorIcon} alt="error" />
      <h3>{errorName}</h3>
      <span>{errorMessage}</span>
    </div>
  );

}

export default React.memo(ErrorMessage);