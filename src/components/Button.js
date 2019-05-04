import React, { Component } from "react";
import { COLORS } from "../constants/styles";
import injectSheet from "react-jss";

const styles = {
  button: {
    color: COLORS.mainTextColor,
    backgroundColor: COLORS.secundaryColor,
    borderRadius: "25px",
    padding: "10px 30px",
    border: "none",
    cursor: "pointer"
  }
};

class Button extends Component {
  render() {
    return (
      <button
        className={this.props.classes.button}
        onClick={() => this.props.handleClick()}
      >
        {this.props.children}
      </button>
    );
  }
}
export default injectSheet(styles)(Button);
