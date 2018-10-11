import React, { Component } from "react";
import BattleProvider from "./battle_context/BattleProvider";
import { Container } from "reactstrap";
import "./App.css";
import BgParticlesJS from "./BgParticleJS";

import StatsSection from "./stats_section/StatsSection";
import HeroesListing from "./heroesListing/HeroesListing";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import UsernameChoice from "./battle/UsernameChoice";
import BattleScreen from "./battle/BattleScreen";
import CombatInit from "./battle/CombatInit";

const listHeroes = [
  30,
  69,
  165,
  207,
  222,
  263,
  310,
  313,
  322,
  341,
  346,
  354,
  514,
  620,
  644
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      collapse: false,
      heroes: [],
      battle: {
        player_1: {
          nickname: "",
          nicknameChec: false
        },
        player_2: {
          nickname: "",
          nicknameCheck: false
        },
        round: {
          roundNumber: 1,
          roundStats: "",
          currentPlayer: "Mathieu"
        }
      },
      selectedHeroOfList: {}
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangeNickname = this.handleChangeNickname.bind(this);
    this.finishRoom = this.finishRoom.bind(this);
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

  callApiSuperHeroes() {
    for (let i = 0; i < listHeroes.length; i++) {
      fetch(`http://superheroapi.com/api.php/2368931693133321/${listHeroes[i]}`)
        .then(results => results.json()) // conversion du résultat en JSON
        .then(data => {
          this.setState({
            heroes: [...this.state.heroes, data]
          });
        });
    }
  }

  finishRoom(currentPlayer) {
    let updateBattle = this.state.battle;

    if (currentPlayer === this.state.battle.player_1.nickname) {
      updateBattle.round.currentPlayer = this.state.battle.player_2.nickname;
    } else if (currentPlayer === this.state.battle.player_2.nickname) {
      updateBattle.round.currentPlayer = this.state.battle.player_1.nickname;
      updateBattle.round.roundNumber++;
    }

    this.setState({
      battle: updateBattle
    });
  }

  componentDidMount() {
    this.callApiSuperHeroes();
  }

  toggle(id) {
    this.setState({
      collapse: true,
      selectedHeroOfList: id
    });
  }

  render() {
    return (
      <div>
        <BattleProvider>
          <BgParticlesJS />
          <Header />
          <Container fluid>
            <HomeNav />
            <BattleScreen {...this.state.battle} finishRoom={this.finishRoom} />
            <UsernameChoice />

            <HeroesListing
              heroes={this.state.heroes}
              collapse={this.state.collapse}
              toggle={this.toggle}
              selectedHeroOfList={this.state.selectedHeroOfList}
            />
            <StatsSection />
            <CombatInit heroes={this.state.heroes} />
          </Container>
          <Footer />
        </BattleProvider>
        
      </div>
    );
  }
}

export default App;
