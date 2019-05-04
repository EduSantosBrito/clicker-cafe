import React, { Component } from "react";
import Coffee from "../assets/images/coffee-icon.png";
import injectSheet from "react-jss";

const styles = {
  image: {
    width: 200,
    margin: 30
  }
};

class CoffeIcon extends Component {
  render() {
    return (
      <img
        src={Coffee}
        className={this.props.classes.image}
        alt="Coffee icon"
      />
    );
  }
}

export default injectSheet(styles)(CoffeIcon);
