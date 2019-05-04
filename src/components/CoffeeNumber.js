import React, { Component } from "react";
import injectSheet from "react-jss";
import { COLORS, SHADOWS } from "../constants/styles";

const styles = {
  counter: {
    fontSize: 70,
    color: COLORS.mainTextColor,
    textShadow: SHADOWS.shadow1,
    margin: 0
  }
};

class CoffeeNumber extends Component {
  render() {
    return <p className={this.props.classes.counter}>{this.props.coffee}</p>;
  }
}

export default injectSheet(styles)(CoffeeNumber);
