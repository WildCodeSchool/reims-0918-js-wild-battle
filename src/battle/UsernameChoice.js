import React, { Fragment } from "react";
import ChoiceNickname from "./ChoiceNickname";
import Countdown from "./Countdown";
import { Row, Container, Col, Button } from "reactstrap";
import "./UsernameChoice.css";
import { Link } from "react-router-dom";

import BattleContext from "../battle_context/BattleContext";

const UsernameChoice = () => (
  <Container fluid id="usernameSection">
    <BattleContext.Consumer>
      {context => (
        <Fragment>
          <Row>
            <Col xs="12" className="pl-5">
              <Link to="/">
                <Button className="button-style mt-3">
                  <span>Back</span>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row
            style={{ minHeight: "60vh" }}
            className={"d-flex justify-content-around"}
          >
            {context.state.battle.player_1.nicknameChecked &&
            context.state.battle.player_2.nicknameChecked ? (
              <Countdown />
            ) : (
              <Fragment>
                <ChoiceNickname name="player_1" title="Player 1" />
                <ChoiceNickname name="player_2" title="Player 2" />
              </Fragment>
            )}
          </Row>
        </Fragment>
      )}
    </BattleContext.Consumer>
  </Container>
);

export default UsernameChoice;
