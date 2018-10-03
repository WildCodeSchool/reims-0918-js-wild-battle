import React, { Component } from "react";
import { Container } from "reactstrap";
import StatsSection from "./stats_section/StatsSection";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import UsernameChoice from "./battle/UsernameChoice";

class App extends Component {
  render() {
    return (
      <Container fluid className="p-0">
        <StatsSection />
        <Header />
        <HomeNav />
        <Footer />
        <UsernameChoice />
      </Container>
    );
  }
}

export default App;
