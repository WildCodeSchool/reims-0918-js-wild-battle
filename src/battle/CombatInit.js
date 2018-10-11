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

  componentDidMount() {}

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
                <HeroCard
                  nameHero={hero.name}
                  imageHero={hero.image.url}
                  str={hero.powerstats.strength}
                  wise={hero.powerstats.intelligence}
                  speed={hero.powerstats.speed}
                  durability={hero.powerstats.durability}
                  selectHero={this.selectHero}
                  id={hero.id}
                />
              </Col>
            ))}
          </Row>
        )}
        {selectedHero ? (
          <Row className="mt-5">
            <Col xs="2">
              <HeroCard
                nameHero={selectedHero[0].name}
                imageHero={selectedHero[0].image.url}
                str={selectedHero[0].powerstats.strength}
                wise={selectedHero[0].powerstats.intelligence}
                speed={selectedHero[0].powerstats.speed}
                durability={selectedHero[0].powerstats.durability}
                id={selectedHero[0].id}
              />
            </Col>
            <Col xs="2">
              <HeroCard
                nameHero={this.props.heroes[this.state.randomHero].name}
                imageHero={this.props.heroes[this.state.randomHero].image.url}
                str={
                  this.props.heroes[this.state.randomHero].powerstats.strength
                }
                wise={
                  this.props.heroes[this.state.randomHero].powerstats
                    .intelligence
                }
                speed={
                  this.props.heroes[this.state.randomHero].powerstats.speed
                }
                durability={
                  this.props.heroes[this.state.randomHero].powerstats.durability
                }
                id={this.props.heroes[this.state.randomHero].id}
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
              <h2>
                {this.state.selectedHero[0].powerstats[
                  stats[this.state.randomStat].toLowerCase()
                ] -
                  this.props.heroes[this.state.randomHero].powerstats[
                    stats[this.state.randomStat].toLowerCase()
                  ] >
                0 ? (
                  "Win"
                ) : this.state.selectedHero[0].powerstats[
                  stats[this.state.randomStat].toLowerCase()
                ] -
                  this.props.heroes[this.state.randomHero].powerstats[
                    stats[this.state.randomStat].toLowerCase()
                  ] ===
                0 ? (
                  <button onClick={() => this.getRandomInt()}>New Fight</button>
                ) : (
                  "Lose"
                )}
              </h2>
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
