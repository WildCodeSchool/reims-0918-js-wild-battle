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
            name="Player_1"
            handleChangeNickname={handleChangeNickname}
            submitCheck={submitCheck}
          />
          <ChoiceNickname
            result={battle.player_2.nickname}
            name="Player_2"
            handleChangeNickname={handleChangeNickname}
            submitCheck={submitCheck}
          />
        </Row>
      </Container>
    );
  }
}

export default UsernameChoice;
