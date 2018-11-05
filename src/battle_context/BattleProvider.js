import React, { Component } from "react";
import BattleContext from "./BattleContext";

import firebase from "../firebase";

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
import Clement from "../img/Clement.png";
import Thomas from "../img/Thomas.png";

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
      heroes: [
        {
          id: 6553,
          name: "The Brain",
          biography: {
            aliases: ["Clem"],
            alignment: "good",
            "alter-egos": "Reactinator",
            "full-name": "Clément Bechetoille",
            "place-of-birth": "In our heart ! <3",
            "first-appearance": "2017",
            publisher: "Into the Wild 2017"
          },
          connections: {
            "group-affiliation": "Wild Code School",
            relatives: "Wilders (students)"
          },
          powerstats: {
            durability: "101",
            intelligence: "101",
            speed: "101",
            strength: "101"
          },
          image: {
            url: Clement
          },
          collector: true
        },
        {
          id: 6554,
          name: "Reactinator",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The Brain",
            "full-name": "Thomas Culdaut",
            "first-appearance": "2017",
            "place-of-birth": "In our mind ! <3 or nightmares !",
            publisher: "Into the Wild 2017"
          },
          connections: {
            "group-affiliation": "Wild Code School",
            relatives: "Wilders (students)"
          },
          powerstats: {
            durability: "999",
            intelligence: "999",
            speed: "999",
            strength: "999"
          },
          image: {
            url: Thomas
          },
          collector: true
        }
      ],
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
    const itemsRef = firebase.database().ref("history");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          winner: items[item].winner,
          loser: items[item].loser,
          date: items[item].date
        });
      }
      this.setState({
        history: newState
      });
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
            const deckTotal = generateDeck(this.state, 10);
            const deck_player_1 = deckTotal.slice(0, 5);
            const deck_player_2 = deckTotal.slice(5, 10);
            const victor = this.state.battle.heroes.find(id => id.id === 6553);
            const victoria = this.state.battle.heroes.find(
              id => id.id === 6554
            );
            deck_player_1.push(victor);
            deck_player_2.push(victoria);

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
            const itemsRef = firebase.database().ref("history");

            itemsRef.push(getMatchData);
            this.setState({
              currentItem: "",
              username: ""
            });
          }
        }}
      >
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleProvider;
