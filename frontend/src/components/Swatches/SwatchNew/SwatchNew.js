import React from 'react';
import classes from './SwatchNew.css';

const SwatchNew = (props) => {
  return (
    <section className={classes.SwatchNew}>
      <article className={classes.Swatch}>

        <div className={classes.line}>
          <div className={classes.option}>
            Active:
          </div>
          <div>
            <input type="checkbox" name="active" checked={props.data.active} onChange={props.toggleActive} />
          </div>
        </div>

        <div className={classes.line}>
          <div className={classes.option}>
            Name:
          </div>
          <div className={classes.value}>
            <input type="text" name="name" value={props.data.name} maxLength="30" onChange={props.inputChange} />
          </div>
        </div>

        <div className={classes.line}>
          <div className={classes.option}>
            Price:
          </div>
          <div className={classes.value}>
            <input type="text" name="price" value={props.data.price} maxLength="8" onChange={props.inputChange} placeholder="0.00" />
          </div>
        </div>

        <div className={classes.line}>
          <div className={classes.option}>
            Color: <div style={{width: "13px", height: "13px", backgroundColor:props.data.color, display: "inline-grid", marginLeft: "8px" }}></div>
          </div>
          <div className={classes.value}>
            <input type="text" name="color" value={props.data.color} maxLength="7" onChange={props.inputChange} placeholder="#000000" />
          </div>
        </div>

        <div className={classes.line}>
          <div className={classes.option}>
            Image: 
          </div>
          <div className={classes.value}>
            <input type="text" name="image" value={props.data.image} maxLength="500" onChange={props.inputChange} placeholder="http://..."  />
          </div>
        </div>

        <div className={classes.line}>
          <div className={classes.option}>
            Thumbnail: 
          </div>
          <div className={classes.value}>
            <input type="text" name="thumb" value={props.data.thumb} maxLength="500" onChange={props.inputChange} placeholder="http://..." />
          </div>
        </div>
      
      </article>
    </section>
  );
}

export default React.memo(SwatchNew);