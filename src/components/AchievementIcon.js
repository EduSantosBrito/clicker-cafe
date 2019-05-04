import React, { Component } from "react";
import AchievementImage from "../assets/images/achievement-icon.png";
import injectSheet from "react-jss";

const styles = {
  image: {
    width: 80
  }
};

class AchievementIcon extends Component {
  render() {
    return (
      <img
        className={this.props.classes.image}
        src={AchievementImage}
        alt="Achievement icon"
      />
    );
  }
}

export default injectSheet(styles)(AchievementIcon);
