import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import HeroCard from "../HeroCard";
import heroes from "./heroes.json";

class CombatInit extends Component {
  constructor(props) {
    super(props);
    this.state = { heroes };
  }

  selectHero = id => {
    const heroes = this.state.heroes.filter(hero => hero.id !== id);
    this.setState({ heroes });
  };

  render() {
    return (
      <Container fluid>
        <Row className="mt-5 justify-content-center">
          {this.state.heroes.map(hero => (
            <Col xs="2" onClick={this.selectCard} key={hero.id}>
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
      </Container>
    );
  }
}

export default CombatInit;
