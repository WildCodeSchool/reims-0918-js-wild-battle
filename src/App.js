import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";

import StatsSection from "./stats_section/StatsSection";
import HeroesListing from "./heroesListing/HeroesListing";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import UsernameChoice from "./battle/UsernameChoice";
import BattleScreen from "./battle/BattleScreen";
import CombatInit from "./battle/CombatInit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battleScreen: {
        whoPlayedRound: "Player 1",
        player1: "Player 1",
        player2: "Player 2",  
        round: 1
      }
    };
    this.finishRoom = this.finishRoom.bind(this);
  }

  finishRoom(whoPlayed) {
    whoPlayed === this.state.player1
      ? this.setState({ whoPlayedRound: this.state.player2 })
      : this.setState({
          whoPlayedRound: this.state.player1,
          round:
            this.state.whoPlayedRound === this.state.player1
              ? this.state.round
              : this.state.round + 1
        });
    console.log(whoPlayed);
  }

  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <HomeNav />
          <UsernameChoice />
          <BattleScreen
            {...this.state.battleScreen}
            finishRoom={this.finishRoom}
          />
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
