import React, { Component } from "react";
import BattleContext from "./BattleContext";
import changeNickname from "./changeNickname";
import nicknameChecked from "./nicknameChecked";
import AsyncStorage from "@callstack/async-storage";
import Ranking from "../stats_section/Ranking.json";

const listHeroes = [
  30,
  69,
  165,
  207,
  213,
  222,
  226,
  263,
  310,
  313,
  322,
  341,
  346,
  354,
  361,
  386,
  485,
  514,
  620,
  644,
];

const rankingTable = Ranking;

class BattleProvider extends Component {
  state = {
    battle: {
      stats: ["Strength", "Speed", "Intelligence", "Durability"],
      heroes: [],
      randomHero: [],
      player_1: {
        nickname: "",
        nicknameChecked: false,
        deck: [],
      },
      player_2: {
        nickname: "",
        nicknameChecked: false,
      },
      round: {
        roundNumber: 1,
        roundStats: "",
        randomStat: "",
        currentPlayer: "Mathieu",
      },
    },
    collapse: false,
    isCollapse: 0,
    selectedHeroOfList: [],
    searchInputHeroList: "",
  };

  callApiSuperHeroes() {
    for (let i = 0; i < listHeroes.length; i++) {
      fetch(`http://superheroapi.com/api.php/2368931693133321/${listHeroes[i]}`)
        .then((results) => results.json()) // conversion du résultat en JSON
        .then((data) => {
          this.setState({
            battle: {
              ...this.state.battle,
              heroes: [...this.state.battle.heroes, data],
            },
          });
        });
    }
  }
  componentDidMount() {
    this.callApiSuperHeroes();
  }

  

  render() {
    return (
      <BattleContext.Provider
        value={{
          state: this.state,
          handleChangeNickname: (event, name) =>
            this.setState(changeNickname(this.state, event, name)),
          submitCheck: (name) => {
            this.setState(nicknameChecked(this.state, name));
          },
          toggle: (id) => {
            this.setState({
              collapse: true,
              isCollapse: 1,
              selectedHeroOfList: id,
            });
          },
          handleSearchListChange: (event) => {
            this.setState({
              searchInputHeroList: event.target.value,
              collapse: false,
            });
          },
          selectHero: (id) => {
            const deck = this.state.battle.player_1.deck.filter(
              (hero) => hero.id !== id
            );
            const randomHero = Math.floor(
              Math.random() * this.state.battle.heroes.length
            );
            this.setState({
              battle: {
                ...this.state.battle,
                player_1: {
                  ...this.state.battle.player_1,
                  deck,

                  selectedHero: this.state.battle.player_1.deck.filter(
                    (hero) => hero.id === id
                  ),
                },
                randomHero: randomHero,
              },
            });
          },

          getRandomInt: () => {
            const randomInt = Math.floor(
              Math.random() * Math.floor(this.state.battle.stats.length)
            );
            this.setState({
              battle: {
                ...this.state.battle,
                round: {
                  ...this.state.battle.round,
                  randomStat: randomInt,
                },
              },
            });
          },
          getRandomDeck: () => {
            let oneCard = 0;
            const deck = [];
            for (let i = 5; i > 0; i--) {
              const randomN = Math.floor(
                Math.random() * this.state.battle.heroes.length
              );
              oneCard = this.state.battle.heroes[randomN];
              if (deck.indexOf(oneCard) === -1) {
                deck.push(oneCard);
              } else {
                i++;
              }
            }
            this.setState({
              battle: {
                ...this.state.battle,
                player_1: {
                  ...this.state.battle.player_1,
                  deck: deck,
                },
              },
            });
          },
          stockInJson: () => {
            if (this.state.nickname !== "") {
              const newName = this.state.nickname;
              await AsyncStorage.setItem("nicknamep1", newName);
              this.setState(() => ({
                nicknamep1: newName,
                nickname: "",
              }));
            }
          },
        }}
      >
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleProvider;
