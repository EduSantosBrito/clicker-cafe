import React, { Component } from "react";
import Container from "./Container";
import injectSheet from "react-jss";
import { COLORS, SHADOWS } from "../constants/styles";
import AchievementIcon from "./AchievementIcon";
import AchievementTitle from "./AchievementTitle";

const styles = {
  container: {
    backgroundColor: COLORS.mainColor,
    boxShadow: SHADOWS.shadow1,
    width: 400,
    height: 100,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    margin: "15px 0px"
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

class Achievement extends Component {
  render() {
    return (
      <Container className={this.props.classes.container}>
        <Container className={this.props.classes.icon}>
          <AchievementIcon />
        </Container>
        <Container className={this.props.classes.title}>
          <AchievementTitle>{this.props.children}</AchievementTitle>
        </Container>
      </Container>
    );
  }
}

export default injectSheet(styles)(Achievement);
