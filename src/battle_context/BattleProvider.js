import React, { Component } from "react";
import BattleContext from "./BattleContext";
import changeNickname from "./changeNickname";
import nicknameChecked from "./nicknameChecked";

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
  644
];

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
        score: 0,
        selectedCard: {}
      },
      player_2: {
        nickname: "",
        nicknameChecked: false,
        deck: [],
        score: 0,
        selectedCard: {}
      },
      round: {
        roundNumber: 1,
        randomStat: 0,
        currentPlayer: "player_1",
        transition: true,
        roundFinished: false,
      }
    },
    collapse: false,
    isCollapse: 0,
    selectedHeroOfList: [],
    searchInputHeroList: ""
  };

  callApiSuperHeroes() {
    for (let i = 0; i < listHeroes.length; i++) {
      fetch(`http://superheroapi.com/api.php/2368931693133321/${listHeroes[i]}`)
        .then(results => results.json()) // conversion du résultat en JSON
        .then(data => {
          this.setState({
            battle: {
              ...this.state.battle,
              heroes: [...this.state.battle.heroes, data]
            }
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
          submitCheck: name => {
            this.setState(nicknameChecked(this.state, name));
          },
          toggle: id => {
            this.setState({
              collapse: true,
              isCollapse: 1,
              selectedHeroOfList: id
            });
          },
          handleSearchListChange: event => {
            this.setState({
              searchInputHeroList: event.target.value,
              collapse: false
            });
          },
          selectHero: id => {
            const deck = this.state.battle[this.state.battle.round.currentPlayer].deck.filter(
              hero => hero.id !== id
            );
            const randomHero = Math.floor(
              Math.random() * this.state.battle.heroes.length
            );
            this.setState({
              battle: {
                ...this.state.battle,
                [this.state.battle.round.currentPlayer]: {
                  ...this.state.battle[this.state.battle.round.currentPlayer],
                  deck,

                  selectedCard: this.state.battle[this.state.battle.round.currentPlayer].deck.filter(
                    hero => hero.id === id
                  )
                },
                round: {
                  ...this.state.battle.round,
                  currentPlayer: this.state.battle.round.currentPlayer === "player_1" ? "player_2" : "player_1",
                  transition: true,
                  roundNumber: this.state.battle.round.currentPlayer === "player_2" ? this.state.battle.round.roundNumber + 1 : this.state.battle.round.roundNumber,
                  roundFinished: this.state.battle.round.currentPlayer === "player_2" ? true : this.state.battle.round.roundFinished
                },
                randomHero: randomHero
              }
            });
          },

          // roundFinished: () => {
          //   this.setState({
          //     battle: {
          //       ...this.state.battle,
          //       round: {
          //         ...this.state.battle.round,
          //         roundFinished: this.state.battle.round.currentPlayer === "player_2" ? true : this.state.battle.round.roundFinished
          //       }
          //     }
          //   })
          // },

          // playerChange: () => {
          //   this.setState({
          //     battle: {
          //       ...this.state.battle,
          //       round: {
          //         currentPlayer: this.state.battle.round.currentPlayer === "player_1" ? "player_2" : "player_1"
          //       }
          //     }
          //   })
          // },
          getRandomInt: () => {
            const randomInt = Math.floor(
              Math.random() * Math.floor(this.state.battle.stats.length)
            );
            this.setState({
              battle: {
                ...this.state.battle,
                round: {
                  ...this.state.battle.round,
                  randomStat: randomInt
                }
              }
            });
          },
          getRandomDeck1: () => {
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
                  deck: deck
                }
              }
            });
          }, getRandomDeck2: () => {
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
                player_2: {
                  ...this.state.battle.player_2,
                  deck: deck
                }
              }
            });
          },
          handleChangeTransition: () => {
            this.setState({
              battle: {
                ...this.state.battle, round: { ...this.state.battle.round, transition: !this.state.battle.round.transition }
              }
            })
          }
        }}
      >
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleProvider;
