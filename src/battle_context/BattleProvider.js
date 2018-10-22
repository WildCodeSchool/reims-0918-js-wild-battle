import React, { Component } from "react";
import BattleContext from "./BattleContext";
import changeNickname from "./changeNickname";
import nicknameChecked from "./nicknameChecked";
import AsyncStorage from "@callstack/async-storage";
import rankingJson from "../stats_section/Ranking.json";

const listHeroes = [
  18,
  30,
  34,
  57,
  60,
  63,
  69,
  92,
  145,
  162,
  165,
  207,
  208,
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
  416,
  418,
  423,
  427,
  435,
  441,
  462,
  485,
  489,
  490,
  502,
  514,
  522,
  523,
  526,
  529,
  566,
  567,
  619,
  620,
  627,
  639,
  644,
  672,
  687,
  729
];

class BattleProvider extends Component {
  state = {
    battle: {
      stats: ["Strength", "Speed", "Intelligence", "Durability"],
      heroes: [],
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
        roundFinished: false,
        roundNumber: 0,
        randomStat: 0,
        currentPlayer: "player_1",
        transition: true,
        roundWinner: 0,
        matchFinished: false
      }
    },
    collapse: false,
    isCollapse: 0,
    selectedHeroOfList: [],
    searchInputHeroList: "",
    ranking: []
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

  getStorage() {
    AsyncStorage.getItem("ranking").then(rank => {
      let ranking;
      if (rank) {
        ranking = JSON.parse(rank);
        console.log(ranking);
      } else {
        ranking = rankingJson;
      }
      this.setState(() => ({
        ranking: ranking
      }));
    });
  }
  componentDidMount() {
    this.callApiSuperHeroes();
    this.getStorage();
  }
  isSimilar = (prevRandom, newRandom) =>
    prevRandom !== newRandom
      ? newRandom
      : this.isSimilar(
          prevRandom,
          Math.floor(Math.random() * Math.floor(this.state.battle.stats.length))
        );

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
          onPressEnterNicknameChecked: (event, name, nicknameLength) => {
            if (event.charCode === 13 && nicknameLength > 2) {
              this.setState(nicknameChecked(this.state, name));
            }
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
            const deck = this.state.battle[
              this.state.battle.round.currentPlayer
            ].deck.filter(hero => hero.id !== id);
            this.setState({
              battle: {
                ...this.state.battle,
                [this.state.battle.round.currentPlayer]: {
                  ...this.state.battle[this.state.battle.round.currentPlayer],
                  deck,

                  selectedCard: this.state.battle[
                    this.state.battle.round.currentPlayer
                  ].deck.filter(hero => hero.id === id)
                }
              }
            });
            setTimeout(() => {
              this.setState({
                battle: {
                  ...this.state.battle,
                  round: {
                    ...this.state.battle.round,
                    currentPlayer:
                      this.state.battle.round.currentPlayer === "player_1"
                        ? "player_2"
                        : "player_1",
                    transition: true,
                    roundFinished:
                      this.state.battle.round.currentPlayer === "player_2"
                        ? true
                        : this.state.battle.round.roundFinished
                  }
                }
              });
            }, 1000);
          },

          setRandomStat: () => {
            this.setState({
              battle: {
                ...this.state.battle,
                round: {
                  ...this.state.battle.round,
                  randomStat: Math.floor(
                    Math.random() * Math.floor(this.state.battle.stats.length)
                  )
                }
              }
            });
          },
          setNewFight: () => {
            const randomNumber = Math.floor(
              Math.random() * Math.floor(this.state.battle.stats.length)
            );
            const drawNewStat = this.isSimilar(
              this.state.battle.round.randomStat,
              randomNumber
            );
            this.setState({
              battle: {
                ...this.state.battle,
                round: {
                  ...this.state.battle.round,
                  roundWinner: 0,
                  randomStat: drawNewStat
                }
              }
            });
          },
          initialisationAndStartCombat: () => {
            let oneCard = 0;
            const deck = [];
            for (let i = 10; i > 0; i--) {
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

            const deck_player_1 = deck.slice(0, 5);
            const deck_player_2 = deck.slice(5, 10);

            this.setState({
              battle: {
                ...this.state.battle,
                player_1: {
                  ...this.state.battle.player_1,
                  deck: deck_player_1
                },
                player_2: {
                  ...this.state.battle.player_2,
                  deck: deck_player_2
                },
                round: {
                  ...this.state.battle.round,
                  roundNumber: 1,
                  randomStat: Math.floor(
                    Math.random() * Math.floor(this.state.battle.stats.length)
                  )
                }
              }
            });
          },
          handleChangeTransition: () => {
            this.setState({
              battle: {
                ...this.state.battle,
                round: {
                  ...this.state.battle.round,
                  transition: !this.state.battle.round.transition
                }
              }
            });
          },
          getToNextRound: () => {
            this.setState({
              battle: {
                ...this.state.battle,
                round: {
                  ...this.state.battle.round,
                  roundFinished: false,
                  roundNumber: this.state.battle.round.roundNumber + 1,
                  currentPlayer: "player_1",
                  roundWinner: 0,
                  randomStat: Math.floor(
                    Math.random() * Math.floor(this.state.battle.stats.length)
                  )
                }
              }
            });
          },
          hasWonRound: (statHeroPlayer1, statHeroPlayer2) => {
            let updatedState = this.state.battle;
            if (statHeroPlayer1 - statHeroPlayer2 === 0) {
              updatedState.round.roundWinner = 3;
            } else {
              if (statHeroPlayer1 - statHeroPlayer2 > 0) {
                updatedState.round.roundWinner = 1;
                updatedState.player_1.score++;
              } else {
                updatedState.round.roundWinner = 2;
                updatedState.player_2.score++;
              }
            }

            this.setState({
              battle: updatedState
            });
          },

          getToFinalScore: () => {
            this.setState({
              battle: {
                ...this.state.battle,
                round: {
                  ...this.state.battle.round,
                  matchFinished: true
                }
              }
            });
          },

          setRematch: () => {
            let oneCard = 0;
            const deck = [];
            for (let i = 10; i > 0; i--) {
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

            const deck_player_1 = deck.slice(0, 5);
            const deck_player_2 = deck.slice(5, 10);

            this.setState({
              battle: {
                ...this.state.battle,
                player_1: {
                  ...this.state.battle.player_1,
                  deck: deck_player_1,
                  score: 0,
                  selectedCard: {}
                },
                player_2: {
                  ...this.state.battle.player_2,
                  deck: deck_player_2,
                  score: 0,
                  selectedCard: {}
                },
                round: {
                  roundFinished: false,
                  roundNumber: 1,
                  randomStat: 0,
                  currentPlayer: "player_1",
                  transition: true,
                  roundWinner: 0,
                  matchFinished: false
                }
              }
            });
          },

          resetAllDataBattle: () => {
            this.setState({
              battle: {
                ...this.state.battle,
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
                  roundFinished: false,
                  roundNumber: 0,
                  randomStat: 0,
                  currentPlayer: "player_1",
                  transition: true,
                  roundWinner: 0,
                  matchFinished: false
                }
              }
            });
          },

          setStorage: (winner, player_1, player_2) => {
            const playerWinner = winner === 1 ? player_1 : player_2;
            const playerLoser = winner === 1 ? player_2 : player_1;
            let prevState = this.state.ranking;
            let doesWinnerExist = 0;
            let doesLoserExist = 0;
            for (let i = 0; i < prevState.length; i++) {
              if (prevState[i].name.indexOf(playerLoser) === 0) {
                prevState[i].lose++;
                doesLoserExist++;
              } else if (prevState[i].name.indexOf(playerWinner) === 0) {
                prevState[i].win++;
                doesWinnerExist++;
              }
            }
            if (!doesWinnerExist) {
              prevState.push({ name: playerWinner, win: 1, lose: 0 });
            }
            if (!doesLoserExist) {
              prevState.push({ name: playerLoser, win: 0, lose: 1 });
            }
            const stringRanking = JSON.stringify(prevState);
            this.setState({ ...this.state, ranking: prevState });
            AsyncStorage.setItem("ranking", stringRanking);
          }
        }}
      >
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleProvider;
