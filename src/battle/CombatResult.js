import React, { Fragment } from "react";
import BattleContext from "../battle_context/BattleContext";
import { Col, Row, Button } from "reactstrap";
import HeroCard from "../HeroCard";
import { Transition, config } from "react-spring";

const CombatResult = () => (
  <BattleContext.Consumer>
    {battleContext => (
      <Fragment>
        <Row>
          <Col xs="12">
            <h2>
              Fight on{" "}
              {
                battleContext.state.battle.stats[
                  battleContext.state.battle.round.randomStat
                ]
              }
            </h2>
          </Col>
        </Row>

        <Row className="d-flex justify-content-around">
          <Col xs="3">
            {battleContext.state.battle.round.roundWinner === 1 ? (
              <h2>WIN</h2>
            ) : battleContext.state.battle.round.roundWinner === 2 ? (
              <h2>LOSE</h2>
            ) : (
              <h2> </h2>
            )}
          </Col>
          <Col xs="2">
            {battleContext.state.battle.round.roundWinner === 3 ? (
              <h2>Draw</h2>
            ) : (
              <h2> </h2>
            )}
          </Col>
          <Col xs="3">
            {battleContext.state.battle.round.roundWinner === 2 ? (
              <h2>WIN</h2>
            ) : battleContext.state.battle.round.roundWinner === 1 ? (
              <h2>LOSE</h2>
            ) : (
              <h2> </h2>
            )}
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
                  selectedHeroOfList={
                    battleContext.state.battle.player_1.selectedCard[0]
                  }
                />
              </Col>
            )}
          </Transition>
          <Col className="text-center" xs="2">
            <Transition
              config={{ tension: 170, friction: 7 }}
              from={{ fontSize: "25px" }}
              enter={{ fontSize: "200px" }}
              leave={{ opacity: 0 }}
            >
              {styles => <h2 style={styles}>VS</h2>}
            </Transition>

            {battleContext.state.battle.round.roundWinner === 0 ? (
              <Button
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
              <Button onClick={() => battleContext.setNewFight()}>
                Fight with another Stat
              </Button>
            ) : battleContext.state.battle.round.roundNumber !== 5 ? (
              <Button onClick={() => battleContext.getToNextRound()}>
                Next round
              </Button>
            ) : (
              <Button onClick={() => battleContext.getToFinalScore()}>
                Final Score
              </Button>
            )}
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
                  selectedHeroOfList={
                    battleContext.state.battle.player_2.selectedCard[0]
                  }
                />
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
