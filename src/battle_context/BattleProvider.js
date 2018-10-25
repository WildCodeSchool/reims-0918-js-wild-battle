import React, { Component } from "react";
import BattleContext from "./BattleContext";
import AsyncStorage from "@callstack/async-storage";
import historyJson from "../stats_section/History.json";

import getRandomNumber from "./getRandomNumber";

import changeNickname from "./changeNickname";
import nicknameChecked from "./nicknameChecked";
import displayCollapseId from "./displayCollapseId";
import addSelectedHeroOnSelectedCard from "./addSelectedHeroOnSelectedCard";
import changePlayer from "./changePlayer";
import setRandomStatRound from "./setRandomStatRound";
import changeStatForFight from "./changeStatForFight";
import generateDeck from "./generateDeck";
import changeTransitionRound from "./changeTransitionRound";
import goToNextRound from "./goToNextRound";
import hasWonRound from "./hasWonRound";

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
    history: []
  };

  callApiSuperHeroes() {
    for (let i = 0; i < listHeroes.length; i++) {
      fetch(`http://superheroapi.com/api.php/2368931693133321/${listHeroes[i]}`)
        .then(results => results.json()) // conversion du résultat en JSON
        .then(data => {
          data.used = false;
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
    AsyncStorage.getItem("history").then(rank => {
      let history;
      if (rank) {
        history = JSON.parse(rank);
      } else {
        history = historyJson;
      }
      this.setState(() => ({
        history: history
      }));
    });
  }
  componentDidMount() {
    this.callApiSuperHeroes();
    this.getStorage();
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
          onPressEnterNicknameChecked: (event, name, nicknameLength) => {
            if (event.charCode === 13 && nicknameLength > 2) {
              this.setState(nicknameChecked(this.state, name));
            }
          },
          toggle: id => {
            this.setState(displayCollapseId(id));
          },
          handleSearchListChange: event => {
            this.setState({
              searchInputHeroList: event.target.value,
              collapse: false
            });
          },
          selectHero: idHero => {
            let heroUsed = 0;
            this.state.battle[this.state.battle.round.currentPlayer].deck.map(
              hero => {
                if (hero.id === idHero) {
                  !hero.used ? (heroUsed = 0) : (heroUsed = 1);
                }
                return hero;
              }
            );

            if (!heroUsed) {
              this.setState(addSelectedHeroOnSelectedCard(this.state, idHero));
              setTimeout(() => {
                this.setState(changePlayer(this.state));
              }, 1000);
            }
          },

          setRandomStat: () => {
            this.setState(setRandomStatRound(this.state));
          },

          setNewFight: () => {
            this.setState(changeStatForFight(this.state));
          },
          initialisationAndStartCombat: () => {
            const deckTotal = generateDeck(this.state, 12);
            const deck_player_1 = deckTotal.slice(0, 6);
            const deck_player_2 = deckTotal.slice(6, 12);

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
                  randomStat: getRandomNumber(this.state.battle.stats.length)
                }
              }
            });
          },
          handleChangeTransition: () => {
            this.setState(changeTransitionRound(this.state));
          },
          getToNextRound: () => {
            this.setState(goToNextRound(this.state));
          },
          hasWonRound: (statHeroPlayer1, statHeroPlayer2) => {
            this.setState(
              hasWonRound(statHeroPlayer1, statHeroPlayer2, this.state)
            );
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
            const deckTotal = generateDeck(this.state, 12);
            const deck_player_1 = deckTotal.slice(0, 6);
            const deck_player_2 = deckTotal.slice(6, 12);

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
            let oneCard = 0;
            const deck = [];
            for (let i = 12; i > 0; i--) {
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

            const deck_player_1 = deck.slice(0, 6);
            const deck_player_2 = deck.slice(6, 12);
            this.setState({
              battle: {
                ...this.state.battle,
                player_1: {
                  nickname: "",
                  nicknameChecked: false,
                  deck: deck_player_1,
                  score: 0,
                  selectedCard: {}
                },
                player_2: {
                  nickname: "",
                  nicknameChecked: false,
                  deck: deck_player_2,
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

          setStorage: (player_1, player_2) => {
            let prevState = this.state.history;
            const gameCompleteDate = new Date();
            const gameDisplayDate = `${gameCompleteDate.getMonth() +
              1}/${gameCompleteDate.getDate()}/${gameCompleteDate.getFullYear()}`;
            const winner =
              player_1.score > player_2.score ? player_1 : player_2;
            const loser = player_1.score > player_2.score ? player_2 : player_1;
            const getMatchData = {
              winner: winner,
              loser: loser,
              date: gameDisplayDate
            };
            prevState.push({ ...getMatchData });

            const stringHistory = JSON.stringify(prevState);
            this.setState({ ...this.state, history: prevState });
            AsyncStorage.setItem("history", stringHistory);
          }
        }}
      >
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleProvider;
