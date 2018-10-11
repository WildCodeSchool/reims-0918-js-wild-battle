import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import HeroCard from "../HeroCard";

const stats = ["Strength", "Speed", "Intelligence", "Durability"];

class CombatInit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomStat: "",
      heroes: [],
      deck: [],
      randomHero: [],
      roundResult: ""
    };
    this.selectHero = this.selectHero.bind(this);
    this.getRandomDeck = this.getRandomDeck.bind(this);
  }

  selectHero = id => {
    const deck = this.state.deck.filter(hero => hero.id !== id);
    const randomHero = Math.floor(Math.random() * this.props.heroes.length);
    this.setState({
      deck,
      selectedHero: this.state.deck.filter(hero => hero.id === id),
      randomHero: randomHero
    });
  };

  getRandomInt = () => {
    const randomInt = Math.floor(Math.random() * Math.floor(stats.length));
    this.setState({
      randomStat: randomInt
    });
  };

  getRandomDeck = () => {
    let oneCard = 0;
    const deck = [];
    for (let i = 5; i > 0; i--) {
      const randomN = Math.floor(Math.random() * this.props.heroes.length);
      oneCard = this.props.heroes[randomN];
      if (deck.indexOf(oneCard) === -1) {
        deck.push(oneCard);
      } else {
        i++;
      }
    }
    this.setState({
      deck: deck
    });
  };

  render() {
    const selectedHero = this.state.selectedHero;
    return (
      <Container fluid>
        <div className="mt-5">
          {this.state.deck.length === 0 && (
            <button onClick={this.getRandomDeck}>Générer le Deck</button>
          )}{" "}
          <br />
          <button onClick={() => this.getRandomInt()}>Fight on:</button>{" "}
          {stats[this.state.randomStat]}
        </div>
        {this.state.deck.length > 0 && (
          <Row className="mt-5 justify-content-center">
            {this.state.deck.map(hero => (
              <Col
                xs="2"
                onClick={() => this.selectHero(hero.id)}
                key={hero.id}
              >
                <HeroCard selectedHeroOfList={hero} />
              </Col>
            ))}
          </Row>
        )}
        {selectedHero ? (
          <Row className="mt-5">
            <Col xs="2">
              <HeroCard selectedHeroOfList={selectedHero[0]} />
            </Col>
            <Col xs="2">
              <HeroCard
                selectedHeroOfList={this.props.heroes[this.state.randomHero]}
              />
            </Col>
            <Col xs="4">
              <h2>Fight on {stats[this.state.randomStat]}</h2>
              <h3>
                {
                  this.state.selectedHero[0].powerstats[
                    stats[this.state.randomStat].toLowerCase()
                  ]
                }
                <span> VS </span>
                {
                  this.props.heroes[this.state.randomHero].powerstats[
                    stats[this.state.randomStat].toLowerCase()
                  ]
                }
              </h3>

              {this.state.selectedHero[0].powerstats[
                stats[this.state.randomStat].toLowerCase()
              ] -
                this.props.heroes[this.state.randomHero].powerstats[
                  stats[this.state.randomStat].toLowerCase()
                ] >
              0 ? (
                <h2 className="text-success">Win</h2>
              ) : this.state.selectedHero[0].powerstats[
                stats[this.state.randomStat].toLowerCase()
              ] -
                this.props.heroes[this.state.randomHero].powerstats[
                  stats[this.state.randomStat].toLowerCase()
                ] ===
              0 ? (
                <button onClick={() => this.getRandomInt()}>New Fight</button>
              ) : (
                <h2 className="text-danger">Lose</h2>
              )}
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
