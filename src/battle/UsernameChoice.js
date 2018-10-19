import React from "react";
import ChoiceNickname from "./ChoiceNickname";
import Countdown from "./Countdown";
import { Row, Container, Col, Button } from "reactstrap";
import "./UsernameChoice.css";
import { Link } from "react-router-dom";

import BattleContext from "../battle_context/BattleContext";

const UsernameChoice = () => (
  <Container fluid id="usernameSection">
    <BattleContext.Consumer>
      {(context) => (
        <Row
          style={{ minHeight: "90vh" }}
          className={"d-flex justify-content-around"}
        >
          <Col xs="12">
            <Link to="/">
              <Button className="button-style mt-3">
                <span>Back</span>
              </Button>
            </Link>
          </Col>
          <ChoiceNickname name="player_1" title="Player 1" />
          {context.state.battle.player_1.nicknameChecked &&
            context.state.battle.player_2.nicknameChecked && <Countdown />}
          <ChoiceNickname name="player_2" title="Player 2" />
        </Row>
      )}
    </BattleContext.Consumer>
  </Container>
);

export default UsernameChoice;
