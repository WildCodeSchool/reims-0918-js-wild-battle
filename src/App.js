import React, { Component } from "react";
import { Container } from "reactstrap";
import UsernameChoice from "./battle/UsernameChoice";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <UsernameChoice />
      </Container>
    );
  }
}

export default App;
