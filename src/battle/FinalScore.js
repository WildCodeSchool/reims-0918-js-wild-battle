import React, { Fragment } from "react";
import { Button, Row, Col } from "reactstrap";
import BattleContext from "../battle_context/BattleContext";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";

const FinalScore = () => (
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
              <Fragment>
                <i className="fas fa-trophy fa-10x mx-auto text-light mt-5" />
                {battleContext.state.battle.player_1.score >
                battleContext.state.battle.player_2.score ? (
                  <h2 className="nicknameTitle" style={{ textAlign: "center" }}>
                    {battleContext.state.battle.player_1.nickname} WIN
                  </h2>
                ) : (
                  <h2 className="nicknameTitle" style={{ textAlign: "center" }}>
                    {battleContext.state.battle.player_2.nickname} WIN
                  </h2>
                )}
                <Row className="d-flex justify-content-center">
                  <Col xs="3" className="text-right">
                    <Button
                      className="button-style"
                      onClick={() => battleContext.setRematch()}
                    >
                      Rematch?
                    </Button>{" "}
                  </Col>
                  <Col xs="3" className="ml-5">
                    <Link to="/">
                      <Button
                        className="button-style"
                        onClick={() => {
                          battleContext.resetAllDataBattle();
                        }}
                      >
                        Go to Home
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Fragment>
            </div>
          </div>
        )}
      </Spring>
    )}
  </BattleContext.Consumer>
);

export default FinalScore;
