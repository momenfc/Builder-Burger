import React from "react";
import classes from "./Burger.module.scss";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let piecesCount = 0;

  let ingredients = props.ingredients.map((ing, _) => {
    piecesCount += ing.piecesCount;

    const pieces = [...Array(ing.piecesCount)];
    return pieces.map((_, i) => (
      <BurgerIngredient key={ing.id + i} type={ing.name} />
    ));
  });

  if (!piecesCount) {
    ingredients = (
      <p style={{ margin: " 0" }}>
        Please start adding ingredients <br />
        😋
      </p>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
