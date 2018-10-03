import React, { Component } from "react";

import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import { Container } from "reactstrap";
import UsernameChoice from "./battle/UsernameChoice";

class App extends Component {
  render() {
    return (
      <Container fluid className="p-0">
        <Header />
        <HomeNav />
        <Footer />
        <UsernameChoice />
      </Container>
    );
  }
}

export default App;
