import React from 'react';
import classes from './SwatchView.css';

const SwatchView = (props) => {

  let image = (<div style={{width: "30vw", height: "30vw", backgroundColor: props.data.color}}></div>);
  if (props.data.image.length > 0)
    image = <img src={props.data.image} alt={props.data.name} style={{width: "100%"}} />

  return (
    <section className={classes.SwatchView}>
      <article className={classes.Swatch}>

        <div className={classes.line}>
          <div className={classes.option}>
            Active:
          </div>
          <div>
            <input type="checkbox" name={props.data.name} checked={props.active} onChange={props.toggleActive} />
          </div>
        </div>

        <div className={classes.line}>
          <div className={classes.option}>
            Name:
          </div>
          <div className={classes.value}>
            {props.data.name}
          </div>
        </div>

        <div className={classes.line}>
          <div className={classes.option}>
            Price:
          </div>
          <div className={classes.value}>
            {props.data.price}
          </div>
        </div>

        <div className={classes.line}>
          <div className={classes.option}>
            Color:
          </div>
          <div className={classes.value}>
            {props.data.color}
            <div style={{width: "13px", height: "13px", backgroundColor:props.data.color, display: "inline-grid", marginLeft: "8px" }}></div>
          </div>
        </div>

        <div className={classes.line}>
          <div className={classes.option}>
            Date:
          </div>
          <div className={classes.value}>
            {props.data.date}
          </div>
        </div>

        <div className={classes.line}>
          {image}
        </div>
      
      </article>
    </section>
  );
}

export default React.memo(SwatchView);