import React, { Component } from "react";
import { Container } from "reactstrap";
import StatsSection from "./StatsSection/StatsSection";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <StatsSection />
      </Container>
    );
  }
}

export default App;
