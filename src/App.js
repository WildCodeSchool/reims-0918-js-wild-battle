import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import "./App.css";
import BgParticlesJS from "./BgParticleJS";
import StatsSection from "./stats_section/StatsSection";
import HeroesListing from "./heroesListing/HeroesListing";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Help from "./Help";
import Footer from "./Footer";
import BattleScene from "./battle/BattleScene";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BgParticlesJS />
        <Header />
        <Container fluid>
          <Switch>
            <Route exact path="/" component={HomeNav} />
            <Route path="/Help" component={Help} />
            <Route path="/Battle" component={BattleScene} />
            <Route path="/HeroesListing" component={HeroesListing} />
            <Route path="/Stats" component={StatsSection} />
          </Switch>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
