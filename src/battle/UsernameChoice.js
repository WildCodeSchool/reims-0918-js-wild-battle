import React, { Component } from "react";
import ChoiceNickname from "./ChoiceNickname";
import { Row, Container } from "reactstrap";
import "./UsernameChoice.css";

class UsernameChoice extends Component {
  render() {
    const { battle, handleChangeNickname, submitCheck } = this.props;
    return (
      <Container fluid id="usernameSection">
        <Row style={{ height: "100vh" }}>
          <ChoiceNickname
            result={battle.player_1.nickname}
            name="player_1"
            handleChangeNickname={handleChangeNickname}
            submitCheck={submitCheck}
            isChecked={battle.player_1.nicknameCheck}
          />
          <ChoiceNickname
            result={battle.player_2.nickname}
            name="player_2"
            handleChangeNickname={handleChangeNickname}
            submitCheck={submitCheck}
            isChecked={battle.player_2.nicknameCheck}
          />
        </Row>
      </Container>
    );
  }
}

export default UsernameChoice;
