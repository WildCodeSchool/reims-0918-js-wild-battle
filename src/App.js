import React, { Component } from "react";

import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import { Container } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container fluid className="p-0">
        <Header />
        <HomeNav />
        <Footer />
      </Container>
    );
  }
}

export default App;
