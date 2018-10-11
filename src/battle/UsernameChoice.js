import React from "react";
import ChoiceNickname from "./ChoiceNickname";
import { Row, Container } from "reactstrap";
import "./UsernameChoice.css";

const UsernameChoice = () => (
  <Container fluid id="usernameSection">
    <Row style={{ height: "100vh" }}>
      <ChoiceNickname name="player_1" />
      <ChoiceNickname name="player_2" />
    </Row>
  </Container>
);

export default UsernameChoice;
