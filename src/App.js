import React, { Component } from "react";
import Title from "./components/Title";
import injectSheet from "react-jss";
import { COLORS } from "./constants/styles";
import CoffeeIcon from "./components/CoffeeIcon";
import Container from "./components/Container";
import Button from "./components/Button";
import CoffeeNumber from "./components/CoffeeNumber";
import Text from "./components/Text";
import Achievement from "./components/Achievement";

const styles = {
  container: {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateColumns: "2fr 1fr",
    gridTemplateAreas: "'counterBox achievementBox'"
  },
  counterBox: {
    gridArea: "counterBox",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.mainColor
  },
  achievementBox: {
    gridArea: "achievementBox",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.secundaryColor
  },
  counterNumberBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 30
  },
  achievementListBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    overflowY: "auto"
  }
};

const ACHIEVEMENTS = [
  { title: "Mas primeiro, uma xícara de café", count: 1 },
  { title: "Bom dia grupo", count: 5 },
  { title: "QUERO CAFÉ!", count: 10 },
  { title: "Ca fé que vai dar tudo certo", count: 15 },
  { title: "FRITA!", count: 20 },
  { title: "Me dá ponto Marco", count: 25 }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: 0,
      achievements: []
    };
  }
  onClick = qtd => {
    ACHIEVEMENTS.map(achievement => {
      if (achievement.count === qtd) {
        let achievements = this.state.achievements;
        achievements.push(achievement.title);
        this.setState({ achievements });
      }
    });
    this.setState({ coffee: qtd });
  };
  render() {
    return (
      <Container className={this.props.classes.container}>
        <Container className={this.props.classes.counterBox}>
          <Title>Want some coffee?</Title>
          <CoffeeIcon />
          <Container className={this.props.classes.counterNumberBox}>
            <CoffeeNumber coffee={this.state.coffee} />
            <Text>coffees</Text>
          </Container>
          <Button handleClick={() => this.onClick(this.state.coffee + 1)}>
            CLICK
          </Button>
        </Container>
        <Container className={this.props.classes.achievementBox}>
          <Title>Achievements</Title>
          <Container className={this.props.classes.achievementListBox}>
            {this.state.achievements.map(achievement => {
              return <Achievement>{achievement}</Achievement>;
            })}
          </Container>
        </Container>
      </Container>
    );
  }
}

export default injectSheet(styles)(App);
