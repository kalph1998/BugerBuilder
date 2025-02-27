import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        less
      </button>
      <button className={classes.More} onClick={props.added}>
        more
      </button>
    </div>
  );
};

export default BuildControl;
