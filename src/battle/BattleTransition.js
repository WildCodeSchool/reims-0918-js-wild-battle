import React from "react";
import BattleContext from "../battle_context/BattleContext";
import { Button, Row } from "reactstrap";
import { Spring } from "react-spring";

const BattleTransition = () => (
  <BattleContext.Consumer>
    {battleContext => (
      <Spring
        from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
        to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        leave={{ opacity: 0 }}
      >
        {styles => (
          <div style={styles}>
            <div
              style={{ styles }}
              className="battle-transition d-flex flex-column justify-content-center text-align-center"
            >
              <Row>
                <h2 className="mx-auto" style={{ fontSize: "150px" }}>
                  Round {battleContext.state.battle.round.roundNumber}
                </h2>
              </Row>
              <Row>
                <h3 style={{ fontSize: "50px" }} className="mx-auto">
                  {
                    battleContext.state.battle[
                      battleContext.state.battle.round.currentPlayer
                    ].nickname
                  }
                  's turn
                </h3>
              </Row>
              <Row>
                <h3 className="mx-auto">
                  Score: {battleContext.state.battle.player_1.score} -{" "}
                  {battleContext.state.battle.player_2.score}
                </h3>
              </Row>
              <Row>
                <Button
                  className="button-style"
                  onClick={() => battleContext.handleChangeTransition()}
                >
                  I'm ready !
                </Button>
              </Row>
            </div>
          </div>
        )}
      </Spring>
    )}
  </BattleContext.Consumer>
);

export default BattleTransition;
