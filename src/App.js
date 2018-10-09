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
      battle:{
        player_1:{
          nickname: "Mathieu"
        },
        player_2:{
          nickname: "Mickaël"
        },
        round:{
          roundNumber: 1,
          currentPlayer: "Mathieu"
        }
      }
    };
    this.finishRoom = this.finishRoom.bind(this);
  }

  finishRoom(currentPlayer) {
    let updateBattle = this.state.battle

    if(currentPlayer === this.state.battle.player_1.nickname){
      updateBattle.round.currentPlayer = this.state.battle.player_2.nickname
    } else if (currentPlayer === this.state.battle.player_2.nickname){
      updateBattle.round.currentPlayer = this.state.battle.player_1.nickname
      updateBattle.round.roundNumber++
    }

    this.setState({
      battle: updateBattle
    })

  }

  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <HomeNav />
          <UsernameChoice />
          <BattleScreen
            {...this.state.battle}
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
