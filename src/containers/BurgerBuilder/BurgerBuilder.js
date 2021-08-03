import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.setTotalPrice();
    console.log("constru");
    console.log(this.state);
  }
  state = {
    ingredients: [
      {
        id: "1",
        name: "bacon",
        price: 3,
        piecesCount: 0,
      },
      {
        id: "2",
        name: "cheese",
        price: 8,
        piecesCount: 1,
      },
      {
        id: "3",
        name: "meat",
        price: 12.5,
        piecesCount: 1,
      },
      {
        id: "4",
        name: "salad",
        price: 6.5,
        piecesCount: 0,
      },
    ],
    totalPrice: null,
  };

  // SET TOTAL PRICE
  setTotalPrice = () => {
    const totalPrice = [...this.state.ingredients].reduce(
      (a, c) => a + c.piecesCount * c.price,
      0
    );
    this.setState({ totalPrice });
    return totalPrice;
  };

  //  SET PIECES COUNT HANDELER
  setPiecesCountHandel = (id, status) => {
    const ingredients = [...this.state.ingredients];
    ingredients.map((ing) => {
      if (ing.id === id) {
        if (status === "plus") ing.piecesCount++;
        if (status === "min") ing.piecesCount--;
      }
      return ing;
    });

    this.setState({ ingredients });
    this.setTotalPrice();
  };

  componentDidMount() {
    this.setTotalPrice();
    console.log("mount");
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          onSetPiecesCount={this.setPiecesCountHandel}
          totalPrice={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}
export default BurgerBuilder;
