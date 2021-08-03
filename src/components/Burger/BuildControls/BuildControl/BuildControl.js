import React from "react";
import classes from "./BuildControl.module.scss";

const BuildControl = (props) => {
  console.log(props);
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={() => props.onSetPiecesCount("min")}
        disabled={!props.piecesCount && "disabled"}
      >
        Less
      </button>
      <button
        className={classes.More}
        onClick={() => props.onSetPiecesCount("plus")}
      >
        More
      </button>
    </div>
  );
};

export default BuildControl;
