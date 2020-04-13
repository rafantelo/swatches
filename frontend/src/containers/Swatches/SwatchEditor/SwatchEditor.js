import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Aux from '../../../hoc/Aux/Aux';
import SwatchView from '../../../components/Swatches/SwatchView/SwatchView';
import Button from '../../../components/UI/Button/Button';
import ErrorMessage from '../../../components/UI/ErrorMessage/ErrorMessage';
import axios from '../../../axios';
import loading from '../../../assets/images/loader.gif';

const SwatchEditor = (props) => {
  const [swatch, setSwatch] = useState(false);
  const [active, setActive] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [dataError, setDataError] = useState({errored: false});

  useEffect(() => {
    if (!swatch) {
      //get swatch
      axios({
        method: 'get',
        url: '/swatches/'+props.match.params.swatchName,
        timeout: 5 * 1000 // 5 seconds
      })
      .then((response) => {
        setSwatch(response.data.data);
        setActive(response.data.data.active);
        setShowLoading(false);
      })
      .catch((error) => {
        setDataError({errored: true, error: error});
      });
    }
  }, [active]);

  const saveHandler = (event) => {
    setShowLoading(true);
    let tempSwatch = {...swatch};
    tempSwatch.active = active;
    tempSwatch.price  = +tempSwatch.price.substr(1);
    axios({
      method: 'put',
      url: '/swatches/'+tempSwatch.nameswatch,
      timeout: 5 * 1000, // 5 seconds
      data: tempSwatch
    })
    .then((response) => {
      alert(response.data.message)
      setShowLoading(false);
    })
    .catch((error) => {
      setDataError({errored: true, error: error});
    });
  }

  const cancelHandler = (event) => {
      props.history.push("/")
  }

  const toogleActiveHandler = (event) => {
    setActive(!active);
  }

  let swatchComponent = undefined;
  if (showLoading)
    swatchComponent = <img src={loading} alt="Loading..." />;
  if (dataError.errored)
    swatchComponent = <ErrorMessage error={dataError.error} errorWidth="75%"/>;
  if (swatchComponent === undefined) 
    swatchComponent = (
      <Aux>
        <div style={{width: "100%", textAlign: "center"}}>
          <Button name="Save" onClick={saveHandler} />
          <Button name="Return" onClick={cancelHandler} />
        </div>
        <SwatchView 
          data={swatch}
          active={active}
          toggleActive={toogleActiveHandler}
        />
      </Aux>
  );

  return swatchComponent;
}



export default withRouter(React.memo(SwatchEditor));
