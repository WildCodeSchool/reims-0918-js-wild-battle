import React, { Component } from "react";
import { Container } from "reactstrap";
import CardsListing from "./CardsListing/CardsListing";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <CardsListing />
      </Container>
    );
  }
}

export default App;
