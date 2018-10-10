import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";
import ParticlesJS from "./ParticleJS";

import StatsSection from "./stats_section/StatsSection";
import HeroesListing from "./heroesListing/HeroesListing";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import UsernameChoice from "./battle/UsernameChoice";

class App extends Component {
  render() {
    return (
      <div>
        <ParticlesJS />
        <Header />
        <Container fluid>
          <HomeNav />
          <UsernameChoice />
          <HeroesListing />
          <StatsSection />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
