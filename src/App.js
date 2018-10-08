import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";

import StatsSection from "./stats_section/StatsSection";
import HeroesListing from "./heroesListing/HeroesListing";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import UsernameChoice from "./battle/UsernameChoice";
import CombatInit from "./battle/CombatInit";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <HomeNav />
          <UsernameChoice />
          <HeroesListing />
          <StatsSection />
          <CombatInit />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
