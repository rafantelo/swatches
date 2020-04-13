import React, { useState, useEffect } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import SwatchesList from '../../../components/Swatches/SwatchesList/SwatchesList';
import SwatchNew from '../../../components/Swatches/SwatchNew/SwatchNew';
import Button from '../../../components/UI/Button/Button';
import ErrorMessage from '../../../components/UI/ErrorMessage/ErrorMessage';
import axios from '../../../axios';
import loading from '../../../assets/images/loader.gif';

const SwatchList = (props) => {

  const [allSwatches, setAllSwatches] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [dataError, setDataError] = useState({errored: false});
  const [newSwatch, setNewSwatch] = useState({show: false});

  useEffect(() => {
    if (allSwatches.length === 0) {
      //get all swatches
      axios({
        method: 'get',
        url: '/swatches',
        timeout: 5 * 1000 // 5 seconds
      })
      .then((response) => {
        setAllSwatches(response.data.data);
        setShowLoading(false);
      })
      .catch((error) => {
        setDataError({errored: true, error: error});
      });
    }
  }, [allSwatches]);

  const newSwatchHandler = (event) => {
    let tempNewSwatch = {...newSwatch};
    tempNewSwatch.data = {
      name: "",
      active: false,
      image: "",
      thumb: "",
      price: 0,
      color: "#"
    }
    tempNewSwatch.show = true;
    setNewSwatch(tempNewSwatch);
  }

  const saveNewSwatchHandler = (event) => {
    if (verifyData()) {
      let tempNewSwatch = {...newSwatch.data}
      tempNewSwatch.price = +tempNewSwatch.price;
      axios({
        method: 'post',
        url: '/swatches/',
        timeout: 5 * 1000, // 5 seconds
        data: tempNewSwatch
      })
      .then((response) => {
        let tempAllSwatches = [...allSwatches];
        tempAllSwatches.push(tempNewSwatch);
        setAllSwatches(tempAllSwatches);
        setNewSwatch({show: false});
        alert(response.data.message);
        setShowLoading(false);
      })
      .catch((error) => {
        setDataError({errored: true, error: error});
      });
    }
    else
    alert('Not saved, invalid data.')
  }

  const cancelNewSwatchHandler = (event) => {
    setNewSwatch({show: false});
  }

  const inputChangeHandler = (event) => {
    let tempNewSwatch = {...newSwatch};
    if (event.target.name === "name")
      tempNewSwatch.data[event.target.name] = event.target.value.replace(/[\W_]+/g," ",'');
    else 
      tempNewSwatch.data[event.target.name] = event.target.value;
    
    setNewSwatch(tempNewSwatch);
  }

  const toggleActiveHandler = (event) => {
    let tempNewSwatch = {...newSwatch};
    tempNewSwatch.data.active = !tempNewSwatch.data.active;
    setNewSwatch(tempNewSwatch);
  }

  const verifyData = () => {
    return !(
      (isNaN(+newSwatch.data.price))
      || (newSwatch.data.name.length === 0)
      || (newSwatch.data.color.length === 0)
    );
  }

  let swatchComponent = undefined;
  if (newSwatch.show)
    swatchComponent = (
      <Aux>
        <div style={{width: "100%", textAlign: "center"}}>
          <Button name="Save" onClick={saveNewSwatchHandler} />
          <Button name="Cancel" onClick={cancelNewSwatchHandler} />
        </div>
        <SwatchNew 
          data         = {newSwatch.data}
          inputChange  = {inputChangeHandler}
          toggleActive = {toggleActiveHandler}
        />
      </Aux>
    );
  if (showLoading)
    swatchComponent = <img src={loading} alt="Loading..." />;
  if (dataError.errored)
    swatchComponent = <ErrorMessage error={dataError.error} errorWidth="75%"/>;
  if (swatchComponent === undefined) 
    swatchComponent = (
      <Aux>
        <div style={{width: "100%", textAlign: "center"}}>
          <Button name="New" onClick={newSwatchHandler} />
        </div>
        <SwatchesList 
          list={allSwatches} 
        />
      </Aux>
  );

  return swatchComponent;
}



export default React.memo(SwatchList);
