import React, { Component } from "react";
import ChoiceNickname from "./ChoiceNickname";
import { Row, Container } from "reactstrap";
import "./UsernameChoice.css";

class UsernameChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player_1: "",
      player_2: ""
    };
    this.handleChangeNickname = this.handleChangeNickname.bind(this);
    this.submitCheck = this.submitCheck.bind(this);
  }

  handleChangeNickname(event) {
    this.setState({
      [event.target.id]: event.target.value.replace(/[ ]+/, "")
    });
  }

  submitCheck = id => {
    alert(id);
  };

  render() {
    return (
      <Container fluid id="usernameSection">
        <Row Style="height: 100vh;">
          <ChoiceNickname
            result={this.state.player_1}
            id="player_1"
            name="Player 1"
            handleChangeNickname={this.handleChangeNickname}
            submitCheck={this.submitCheck}
          />
          <ChoiceNickname
            result={this.state.player_2}
            id="player_2"
            name="Player 2"
            handleChangeNickname={this.handleChangeNickname}
          />
        </Row>
      </Container>
    );
  }
}

export default UsernameChoice;
