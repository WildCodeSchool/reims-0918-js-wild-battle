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
                {context.state.battle.player_1.deck.length === 0 && (
                  <button onClick={context.getRandomDeck}>
                    Générer le Deck
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
              {context.state.battle.player_1.deck.length > 0 && (
                <Row className="mt-5 pt-5 border-top border-light justify-content-center">
                  {context.state.battle.player_1.deck.map(hero => (
                    <Col
                      xs="2"
                      onClick={() => context.selectHero(hero.id)}
                      key={hero.id}
                    >
                      <HeroCard selectedHeroOfList={hero} />
                    </Col>
                  ))}
                </Row>
              )}
              {context.state.battle.player_1.selectedHero ? (
                <Row className="pt-5 mt-5 border-top border-light">
                  {console.log(context.state.battle.player_1.selectedHero[0])}
                  <Col xs="2">
                    <HeroCard
                      selectedHeroOfList={
                        context.state.battle.player_1.selectedHero[0]
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
                  <Col xs="4">
                    <h2>
                      Fight on{" "}
                      {
                        context.state.battle.stats[
                          context.state.battle.round.randomStat
                        ]
                      }
                    </h2>
                    <h3>
                      {
                        context.state.battle.player_1.selectedHero[0]
                          .powerstats[
                          context.state.battle.stats[
                            context.state.battle.round.randomStat
                          ].toLowerCase()
                        ]
                      }
                      <span> VS </span>
                      {
                        context.state.battle.heroes[
                          context.state.battle.randomHero
                        ].powerstats[
                          context.state.battle.stats[
                            context.state.battle.round.randomStat
                          ].toLowerCase()
                        ]
                      }
                    </h3>

                    {context.state.battle.player_1.selectedHero[0].powerstats[
                      context.state.battle.stats[
                        context.state.battle.round.randomStat
                      ].toLowerCase()
                    ] -
                      context.state.battle.heroes[
                        context.state.battle.randomHero
                      ].powerstats[
                        context.state.battle.stats[
                          context.state.battle.round.randomStat
                        ].toLowerCase()
                      ] >
                    0 ? (
                      <h2 className="text-success FontBangers">Win</h2>
                    ) : context.state.battle.player_1.selectedHero[0]
                      .powerstats[
                      context.state.battle.stats[
                        context.state.battle.round.randomStat
                      ].toLowerCase()
                    ] -
                      context.state.battle.heroes[
                        context.state.battle.randomHero
                      ].powerstats[
                        context.state.battle.stats[
                          context.state.battle.round.randomStat
                        ].toLowerCase()
                      ] ===
                    0 ? (
                      <button onClick={() => context.getRandomInt()}>
                        New Fight
                      </button>
                    ) : (
                      <h2 className="text-danger FontBangers">Lose</h2>
                    )}
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
