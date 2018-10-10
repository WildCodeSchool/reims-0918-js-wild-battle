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
  constructor() {
    super();
    this.state = {
      battle: {
        player_1: {
          nickname: "",
          nicknameCheck: false
        },
        player_2: {
          nickname: "",
          nicknameCheck: false
        },
        round: {
          roundNumber: 1,
          roundStats: ""
        }
      }
    };
    this.handleChangeNickname = this.handleChangeNickname.bind(this);
  }

  handleChangeNickname = (event, name) => {
    this.setState({
      battle: {
        ...this.state.battle,
        [name]: {
          ...this.state.battle[name],
          nickname: event.target.value
        }
      }
    });
  };

  submitCheck = name => {
    let updateBattle = this.state.battle;
    if (name === "Player_1") {
      updateBattle.player_1.nicknameCheck = true;
    } else if (name === "Player_2") {
      updateBattle.player_2.nicknameCheck = true;
    }
    this.setState({
      battle: updateBattle
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <HomeNav />
          <UsernameChoice
            battle={this.state.battle}
            handleChangeNickname={this.handleChangeNickname}
            submitCheck={this.submitCheck}
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
