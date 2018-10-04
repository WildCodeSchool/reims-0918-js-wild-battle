import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";

import StatsSection from "./StatsSection/StatsSection";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import UsernameChoice from "./battle/UsernameChoice";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <HomeNav />
          <UsernameChoice />
          <StatsSection />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
