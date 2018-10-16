import React, { Component, Fragment } from "react";
import { Row, Col, Container } from "reactstrap";
import HeroCard from "../HeroCard";

import BattleContext from "../battle_context/BattleContext";

class CombatInit extends Component {
  render() {
    return (
      <Container fluid id="CombatInit" style={{ height: "100vh" }}>
        <BattleContext.Consumer>
          {context => (
            <Fragment>
              <div className="mt-5">
                {context.state.battle[context.state.battle.round.currentPlayer].deck.length === 0 && (
                  <button onClick={context.getRandomDeck1}>
                    Générer le Deck1
                  </button>
                )}
                {context.state.battle.player_2.deck.length === 0 && (
                  <button onClick={context.getRandomDeck2}>
                    Générer le Deck2
                  </button>
                )}
                <br />
                <button onClick={() => context.getRandomInt()}>
                  Fight on:
                </button>
                <span className="text-light">
                  {
                    context.state.battle.stats[
                    context.state.battle.round.randomStat
                    ]
                  }
                </span>
              </div>
              {context.state.battle[context.state.battle.round.currentPlayer].deck.length > 0 && (
                <Row className="mt-5 pt-5 border-top border-light justify-content-center">
                  {context.state.battle[context.state.battle.round.currentPlayer].deck.map(hero => (
                    <Col
                      xs="2"
                      onClick={() => context.test(hero.id)}
                      key={hero.id}
                    >
                      <HeroCard selectedHeroOfList={hero} />
                    </Col>
                  ))}
                </Row>
              )}
              {context.state.battle[context.state.battle.round.currentPlayer].selectedHero ? (
                <Row className="pt-5 mt-5 border-top border-light">
                  {console.log(context.state.battle[context.state.battle.round.currentPlayer].selectedHero[0])}
                  <Col xs="2">
                    <HeroCard
                      selectedHeroOfList={
                        context.state.battle[context.state.battle.round.currentPlayer].selectedHero[0]
                      }
                    />
                  </Col>
                  <Col xs="2">
                    <HeroCard
                      selectedHeroOfList={
                        context.state.battle.heroes[
                        context.state.battle.randomHero
                        ]
                      }
                    />
                  </Col>
                </Row>
              ) : (
                  <Col />
                )}
            </Fragment>
          )}
        </BattleContext.Consumer>
      </Container>
    );
  }
}

export default CombatInit;
