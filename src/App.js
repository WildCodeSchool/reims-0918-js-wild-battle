import React, { Component } from "react";
import { Container } from "reactstrap";
import HeroesListing from "./heroesListing/HeroesListing";

import StatsSection from "./StatsSection/StatsSection";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import UsernameChoice from "./battle/UsernameChoice";

class App extends Component {
  render() {
    return (
      <Container fluid className="">
        <Header />
        <HomeNav />
        <Footer />
        <HeroesListing />
        <StatsSection />
        <UsernameChoice />
      </Container>
    );
  }
}

export default App;
