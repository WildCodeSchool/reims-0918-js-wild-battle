import React from "react";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";

const UsernameChoice = () => (
  <Row Style="height: 100vh;">
    <Col xs={{ size: 4, offset: 1 }} className="my-auto">
      <h3>Player 1</h3>
      <Form>
        <FormGroup className="d-flex">
          <Input
            type="text"
            name="nickname_player_1"
            id="player_1"
            placeholder="Player 1 : Enter Your Nickname"
            className="mr-2"
          />
          <i className="far fa-check-circle fa-2x text-success" />
        </FormGroup>
      </Form>
    </Col>
    <Col xs={{ size: 4, offset: 2 }} className="my-auto">
      <h3>Player 2</h3>
      <Form>
        <FormGroup className="d-flex">
          <Input
            type="text"
            name="nickname_player_2"
            id="player_2"
            placeholder="Player 2 : Enter Your Nickname"
            className="mr-2"
          />
          <i className="fas fa-check-circle fa-2x text-success" />
        </FormGroup>
      </Form>
    </Col>
  </Row>
);

export default UsernameChoice;
