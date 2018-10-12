import React from "react";
import ChoiceNickname from "./ChoiceNickname";
import CountDown from "./CountDown";
import { Row, Container } from "reactstrap";
import "./UsernameChoice.css";

import BattleContext from "../battle_context/BattleContext";

const UsernameChoice = () => (
  <Container fluid id="usernameSection">
    <BattleContext.Consumer>
      {context => (
        <Row
          style={{ height: "100vh" }}
          className={"d-flex justify-content-around"}
        >
          <ChoiceNickname name="player_1" title="Player 1" />
          <ChoiceNickname name="player_2" title="Player 2" />
          {context.state.battle.player_1.nicknameChecked &&
            context.state.battle.player_2.nicknameChecked && <CountDown />}
        </Row>
      )}
    </BattleContext.Consumer>
  </Container>
);

export default UsernameChoice;
