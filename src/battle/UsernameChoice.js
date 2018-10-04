import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";
import "./UsernameChoice.css";

class UsernameChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player_1: "",
      player_2: ""
    };
    this.handleChangeNickname = this.handleChangeNickname.bind(this);
  }

  handleChangeNickname(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <Row Style="height: 100vh;">
        <Col xs={{ size: 4, offset: 1 }} className="my-auto">
          <h3>Player 1 {`: ${this.state.player_1}`}</h3>
          <Form>
            <FormGroup className="d-flex">
              <Input
                type="text"
                name="nickname_player_1"
                id="player_1"
                placeholder="Enter Your Nickname"
                className="mr-2"
                onChange={this.handleChangeNickname}
              />
              <span
                className={
                  this.state.player_1.length > 2 ? "d-inline" : "d-none"
                }
              >
                <i className="far fa-check-circle fa-2x btnNickname" />
              </span>
            </FormGroup>
          </Form>
        </Col>
        <Col xs={{ size: 4, offset: 2 }} className="my-auto">
          <h3>Player 2 {`: ${this.state.player_2}`}</h3>
          <Form>
            <FormGroup className="d-flex">
              <Input
                type="text"
                name="nickname_player_2"
                id="player_2"
                placeholder="Enter Your Nickname"
                className="mr-2"
                onChange={this.handleChangeNickname}
              />
              <i className="far fa-check-circle fa-2x btnNickname" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default UsernameChoice;
