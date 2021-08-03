import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.scss";

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p className={classes.PriceLabel}>
        Current Price:{" "}
        <span>{props.totalPrice ? props.totalPrice.toFixed(2) : "Zero"}</span>
      </p>
      {props.ingredients.map((ing) => (
        <BuildControl
          key={ing.id}
          label={ing.name}
          piecesCount={ing.piecesCount}
          onSetPiecesCount={(status) => props.onSetPiecesCount(ing.id, status)}
        />
      ))}
      <button disabled={props.totalPrice === 0} className={classes.OrderButton}>
        order now
      </button>
    </div>
  );
};

export default BuildControls;
