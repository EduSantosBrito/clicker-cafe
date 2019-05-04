import React, { Component } from "react";
import { COLORS } from "../constants/styles";
import injectSheet from "react-jss";
const styles = {
  title: {
    color: COLORS.mainColorContrast
  }
};

class AchievementTitle extends Component {
  render() {
    return <p className={this.props.classes.title}>{this.props.children}</p>;
  }
}
export default injectSheet(styles)(AchievementTitle);
