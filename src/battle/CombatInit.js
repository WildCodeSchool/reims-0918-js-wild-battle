import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import HeroCard from "../HeroCard";
import heroes from "./heroes.json";

const stats = ["Strength", "Intelligence", "Speed", "Durability"];

class CombatInit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes,
      randomStat: ""
    };
    this.selectHero = this.selectHero.bind(this);
  }

  selectHero = id => {
    const heroes = this.state.heroes.filter(hero => hero.id !== id);
    this.setState({
      heroes,
      selectedHero: this.state.heroes.filter(hero => hero.id === id)
    });
  };

  getRandomInt = () => {
    const randomInt = Math.floor(Math.random() * Math.floor(stats.length));
    this.setState({
      randomStat: randomInt
    });
  };

  render() {
    const selectedHero = this.state.selectedHero;

    return (
      <Container fluid>
        <div onClick={() => this.getRandomInt()}>
          Fight on: {stats[this.state.randomStat]}
        </div>
        <Row className="mt-5 justify-content-center">
          {this.state.heroes.map(hero => (
            <Col xs="2" onClick={() => this.selectHero(hero.id)} key={hero.id}>
              <HeroCard
                nameHero={hero.nameHero}
                imageHero={hero.imageHero}
                str={hero.str}
                wise={hero.wise}
                speed={hero.speed}
                durability={hero.durability}
                selectHero={this.selectHero}
                id={hero.id}
              />
            </Col>
          ))}
        </Row>
        {selectedHero ? (
          <Row>
            <Col xs="2">
              <HeroCard
                nameHero={selectedHero[0].nameHero}
                imageHero={selectedHero[0].imageHero}
                str={selectedHero[0].str}
                wise={selectedHero[0].wise}
                speed={selectedHero[0].speed}
                durability={selectedHero[0].durability}
                id={selectedHero[0].id}
              />
            </Col>
            <Col xs="2">
              <HeroCard
                nameHero={this.state.heroes[0].nameHero}
                imageHero={this.state.heroes[0].imageHero}
                str={this.state.heroes[0].str}
                wise={this.state.heroes[0].wise}
                speed={this.state.heroes[0].speed}
                durability={this.state.heroes[0].durability}
                id={this.state.heroes[0].id}
              />
            </Col>
          </Row>
        ) : (
          <Col />
        )}
      </Container>
    );
  }
}

export default CombatInit;
