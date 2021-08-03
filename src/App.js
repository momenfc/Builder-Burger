import classes from "./App.module.scss";
import React, { Component } from "react";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;
