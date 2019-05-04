import React, { Component } from "react";
import injectSheet from "react-jss";
import { COLORS, SHADOWS } from "../constants/styles";

const styles = {
  text: {
    fontSize: 28,
    color: COLORS.mainTextColor,
    textShadow: SHADOWS.shadow1,
    margin: 0
  }
};

class Text extends Component {
  render() {
    return <p className={this.props.classes.text}>{this.props.children}</p>;
  }
}

export default injectSheet(styles)(Text);
