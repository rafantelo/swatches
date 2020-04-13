import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './SwatchesList.css';

const SwatchesList = (props) => {
  return (
    <section className={classes.SwatchesList}>
      {
        props.list.map((swatch) => {
          let activeStatus = (<p style={{color: "#6CC250", fontWeight: "bold", marginTop: "4px"}}>Active</p>);
          if (!swatch.active)
            activeStatus = (<p style={{color: "#ff0000", fontWeight: "bold", marginTop: "4px"}}>Inactive</p>);
          let image = (<div style={{width: "150px", height: "150px", backgroundColor: swatch.color}}></div>);
          if (swatch.thumb.length > 0)
            image = <img src={swatch.thumb} alt={swatch.name} />;
          return (
            <article key={swatch.name} className={classes.Swatch}>
              <Link to={{ pathname: '/' + swatch.name }} >{image}</Link>
              <div style={{marginTop: "7px"}}>
                <Link to={{ pathname: '/' + swatch.name }} >{swatch.name}</Link>
                {activeStatus}
              </div>
            </article>
          );
        })
      }
    </section>
  )
}

SwatchesList.PropTypes = {
  list: PropTypes.array
}

export default React.memo(SwatchesList);