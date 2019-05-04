import React, { Component } from "react";
import injectSheet from "react-jss";
import { COLORS, SHADOWS } from "../constants/styles";

const styles = {
  title: {
    fontSize: 30,
    color: COLORS.mainTextColor,
    justifySelf: "flex-start",
    textShadow: SHADOWS.shadow1
  }
};

class Title extends Component {
  render() {
    return <h1 className={this.props.classes.title}>{this.props.children}</h1>;
  }
}

export default injectSheet(styles)(Title);
