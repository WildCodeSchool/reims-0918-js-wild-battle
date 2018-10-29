import React, { Component, Fragment } from "react";
import { Row, Col, Container } from "reactstrap";
import HeroCard from "../HeroCard";
import { Transition, Spring } from "react-spring";

import BattleContext from "../battle_context/BattleContext";

class CombatInit extends Component {
  render() {
    return (
      <Container fluid id="CombatInit" style={{ height: "60vh" }}>
        <BattleContext.Consumer>
          {context => (
            <Fragment>
              <div className="mt-5">
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                >
                  {styles => (
                    <h2 className="text-center" style={styles}>
                      Fight on
                      <br />
                      <span className="mr-3">
                        {context.state.battle.round.randomStat === 0 ? (
                          <i className="fas fa-dumbbell" />
                        ) : context.state.battle.round.randomStat === 1 ? (
                          <i className="fas fa-bolt" />
                        ) : context.state.battle.round.randomStat === 2 ? (
                          <i className="fas fa-book" />
                        ) : (
                          <i className="fas fa-shield-alt" />
                        )}
                      </span>
                      {
                        context.state.battle.stats[
                          context.state.battle.round.randomStat
                        ]
                      }
                      <span className="ml-3">
                        {context.state.battle.round.randomStat === 0 ? (
                          <i className="fas fa-dumbbell" />
                        ) : context.state.battle.round.randomStat === 1 ? (
                          <i className="fas fa-bolt" />
                        ) : context.state.battle.round.randomStat === 2 ? (
                          <i className="fas fa-book" />
                        ) : (
                          <i className="fas fa-shield-alt" />
                        )}
                      </span>
                    </h2>
                  )}
                </Spring>
              </div>
              {context.state.battle[context.state.battle.round.currentPlayer]
                .deck.length > 0 && (
                <Row
                  className="battle-deck justify-content-center"
                  style={{ minHeight: "80%" }}
                >
                  <Transition
                    keys={context.state.battle[
                      context.state.battle.round.currentPlayer
                    ].deck.map(item => item.id)}
                    from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                    leave={{
                      opacity: 0,
                      scale: 0
                    }}
                    delay={300}
                  >
                    {context.state.battle[
                      context.state.battle.round.currentPlayer
                    ].deck.map((hero, index) => styles => (
                      <Col
                        className="mt-5"
                        style={styles}
                        xs="6"
                        md="4"
                        lg="2"
                        onClick={() => {
                          context.selectHero(hero.id);
                        }}
                        key={hero.id}
                      >
                        <HeroCard indexHero={index} selectedHeroOfList={hero} />
                      </Col>
                    ))}
                  </Transition>
                </Row>
              )}
            </Fragment>
          )}
        </BattleContext.Consumer>
      </Container>
    );
  }
}

export default CombatInit;
