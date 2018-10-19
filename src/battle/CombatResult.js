import React, { Fragment } from "react";
import BattleContext from "../battle_context/BattleContext";
import { Col, Row, Button } from "reactstrap";
import HeroCard from "../HeroCard";
import WinOrLose from "./WinOrLose";
import { Transition, Spring, config } from "react-spring";

const CombatResult = () => (
  <BattleContext.Consumer>
    {battleContext => (
      <Fragment>
        <Row>
          <Col xs="12">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {styles => (
                <h2 className="text-center mt-4" style={styles}>
                  Fight on{" "}
                  {
                    battleContext.state.battle.stats[
                      battleContext.state.battle.round.randomStat
                    ]
                  }
                  <span className="ml-3">
                    {battleContext.state.battle.round.randomStat === 1 ? (
                      <i className="fas fa-dumbbell" />
                    ) : battleContext.state.battle.round.randomStat === 2 ? (
                      <i className="fas fa-bolt" />
                    ) : battleContext.state.battle.round.randomStat === 3 ? (
                      <i className="fas fa-book" />
                    ) : (
                      <i className="fas fa-shield-alt" />
                    )}
                  </span>
                </h2>
              )}
            </Spring>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          <Transition
            config={{ tension: 170, friction: 6 }}
            from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
            enter={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            leave={{ opacity: 0 }}
          >
            {styles => (
              <Col style={styles} className="text-center" xs="3">
                <HeroCard
                  className="position:relative"
                  battle="true"
                  selectedHeroOfList={
                    battleContext.state.battle.player_1.selectedCard[0]
                  }
                />
                <WinOrLose player1={1} player2={2} />
              </Col>
            )}
          </Transition>
          <Col className="text-center" xs="3">
            <Row
              style={{ marginTop: "22%" }}
              className="d-flex justify-content-around align-items-center"
            >
              {battleContext.state.battle.round.roundWinner !== 0 ? (
                <Col xs="3">
                  <Spring
                    config={{ tension: 170, friction: 7 }}
                    from={{ fontSize: "0vw" }}
                    to={{ fontSize: "4vw" }}
                  >
                    {props => (
                      <h2 style={props}>
                        {
                          battleContext.state.battle.player_1.selectedCard[0]
                            .powerstats[
                            battleContext.state.battle.stats[
                              battleContext.state.battle.round.randomStat
                            ].toLowerCase()
                          ]
                        }
                      </h2>
                    )}
                  </Spring>
                </Col>
              ) : (
                ""
              )}
              <Col xs="6">
                <Transition
                  config={{ tension: 170, friction: 7 }}
                  from={{ fontSize: "0vw" }}
                  enter={{ fontSize: "12vw" }}
                  leave={{ opacity: 0 }}
                >
                  {styles => <h2 style={styles}>VS</h2>}
                </Transition>
              </Col>
              {battleContext.state.battle.round.roundWinner !== 0 ? (
                <Col xs="3">
                  <Spring
                    config={{ tension: 170, friction: 7 }}
                    from={{ fontSize: "0vw" }}
                    to={{ fontSize: "4vw" }}
                  >
                    {props => (
                      <h2 style={props}>
                        {
                          battleContext.state.battle.player_2.selectedCard[0]
                            .powerstats[
                            battleContext.state.battle.stats[
                              battleContext.state.battle.round.randomStat
                            ].toLowerCase()
                          ]
                        }
                      </h2>
                    )}
                  </Spring>
                </Col>
              ) : (
                ""
              )}
            </Row>
            <Row className="d-flex justify-content-center">
              <Col xs="12">
                {battleContext.state.battle.round.roundWinner === 3 ? (
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "135px",
                      color: "#cecece",
                      textShadow: "3px 3px #646464"
                    }}
                  >
                    Draw
                  </h2>
                ) : (
                  <h2> </h2>
                )}
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col xs="12">
                {battleContext.state.battle.round.roundWinner === 0 ? (
                  <Button
                    className="button-style"
                    onClick={() =>
                      battleContext.hasWonRound(
                        battleContext.state.battle.player_1.selectedCard[0]
                          .powerstats[
                          battleContext.state.battle.stats[
                            battleContext.state.battle.round.randomStat
                          ].toLowerCase()
                        ],
                        battleContext.state.battle.player_2.selectedCard[0]
                          .powerstats[
                          battleContext.state.battle.stats[
                            battleContext.state.battle.round.randomStat
                          ].toLowerCase()
                        ]
                      )
                    }
                  >
                    Result
                  </Button>
                ) : battleContext.state.battle.round.roundWinner === 3 ? (
                  <Button
                    className="button-style"
                    onClick={() => battleContext.setNewFight()}
                  >
                    Fight Again
                  </Button>
                ) : battleContext.state.battle.round.roundNumber !== 5 ? (
                  <Button
                    className="button-style"
                    onClick={() => battleContext.getToNextRound()}
                  >
                    Next round
                  </Button>
                ) : (
                  <Button
                    className="button-style"
                    onClick={() => battleContext.getToFinalScore()}
                  >
                    Final Score
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
          <Transition
            config={{ tension: 170, friction: 6 }}
            from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
            enter={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            leave={{ opacity: 0 }}
          >
            {styles => (
              <Col style={styles} className="text-center" xs="3">
                <HeroCard
                  className="position:relative"
                  battle="true"
                  selectedHeroOfList={
                    battleContext.state.battle.player_2.selectedCard[0]
                  }
                />
                <WinOrLose player1={2} player2={1} />
              </Col>
            )}
          </Transition>
        </Row>
      </Fragment>
    )}
  </BattleContext.Consumer>
);

// const CombatResult = () => (
//   <BattleContext.Consumer>
//     {battleContext => (

//       < Col xs="4">
//         <h2>
//           Fight on{" "}
//           {
//             battleContext.state.battle.stats[
//             battleContext.state.battle.round.randomStat
//             ]
//           }
//         </h2>
//         <h3>
//           {
//             statHeroPlayer1 = battleContext.state.battle.player_1.selectedCard[0]
//               .powerstats[
//             battleContext.state.battle.stats[
//               battleContext.state.battle.round.randomStat
//             ].toLowerCase()
//             ]
//           }
//           <span> VS </span>
//           {
//             battleContext.state.battle.player_2.selectedCard[0]
//               .powerstats[
//             battleContext.state.battle.stats[
//               battleContext.state.battle.round.randomStat
//             ].toLowerCase()
//             ]
//           }
//         </h3>

//         {battleContext.state.battle.player_1.selectedCard[0].powerstats[
//           battleContext.state.battle.stats[
//             battleContext.state.battle.round.randomStat
//           ].toLowerCase()
//         ] -
//           battleContext.state.battle.player_2.selectedCard[0].powerstats[
//           battleContext.state.battle.stats[
//             battleContext.state.battle.round.randomStat
//           ].toLowerCase()
//           ] >
//           0 ? (
//             <h2 className="text-success FontBangers">Win</h2>
//           ) : battleContext.state.battle.player_1.selectedCard[0]
//             .powerstats[
//             battleContext.state.battle.stats[
//               battleContext.state.battle.round.randomStat
//             ].toLowerCase()
//           ] -
//             battleContext.state.battle.player_2.selectedCard[0].powerstats[
//             battleContext.state.battle.stats[
//               battleContext.state.battle.round.randomStat
//             ].toLowerCase()
//             ] ===
//             0 ? (
//               <button onClick={() => battleContext.getRandomInt()}>
//                 New Fight
//                       </button>
//             ) : (
//               <h2 className="text-danger FontBangers">Lose</h2>
//             )}

//         <Button onClick={() => battleContext.getToNextRound()} >Next round</Button>
//       </Col>
//     )}
//   </BattleContext.Consumer >
// )

export default CombatResult;
