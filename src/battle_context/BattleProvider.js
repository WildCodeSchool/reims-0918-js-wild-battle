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
import Clement from "../img/Victoria/Clement.png";
import Thomas from "../img/Victoria/Thomas.png";
import Mathieu from "../img/Victoria/Mathieu400.jpg";
import Michael from "../img/Victoria/Michael400.jpg";
import Fabien from "../img/Victoria/Fabien400.jpg";
import Florentin from "../img/Victoria/Florentin400.jpg";
import Leuthsouline from "../img/Victoria/Leuthsouline400.jpg";
import Benoit from "../img/Victoria/Benoit400.jpg";
import Quentin from "../img/Victoria/Quentin400.jpg";
import Corentin from "../img/Victoria/Corentin400.jpg";
import Charles from "../img/Victoria/Charles400.jpg";
import Robin from "../img/Victoria/Robin400.jpg";
import Michel from "../img/Victoria/Michel400.jpg";
import Gautier from "../img/Victoria/Gautier400.jpg";
import Lucas from "../img/Victoria/lucas-150.jpg";
import Moka from "../img/Victoria/MohamedK-150.jpg";
import Mohamed from "../img/Victoria/MohamedL-150.jpg";
import Justine from "../img/Victoria/Justine-150.jpg";
import Anabelle from "../img/Victoria/Anabelle-150.jpg";
import Tantely from "../img/Victoria/Tantely-150.jpg";
import Erwan from "../img/Victoria/Erwan-150.jpg";
import Alexis from "../img/Victoria/Alexis-150.jpg";
import Nicolas from "../img/Victoria/Nicolas-150.jpg";
import Tony from "../img/Victoria/Tony-150.jpg";
import Marthe from "../img/Victoria/Marthe-150.jpg";
import Gaetan from "../img/Victoria/Gaetan-150.jpg";

// const listHeroes = [
//   18,
//   30,
//   34,
//   57,
//   60,
//   63,
//   69,
//   92,
//   145,
//   162,
//   165,
//   207,
//   208,
//   213,
//   222,
//   226,
//   263,
//   310,
//   313,
//   322,
//   341,
//   346,
//   354,
//   361,
//   386,
//   416,
//   418,
//   423,
//   427,
//   435,
//   441,
//   462,
//   485,
//   489,
//   490,
//   502,
//   514,
//   522,
//   523,
//   526,
//   529,
//   566,
//   567,
//   619,
//   620,
//   627,
//   639,
//   644,
//   672,
//   687,
//   729
// ];

class BattleProvider extends Component {
  state = {
    battle: {
      stats: ["Strength", "Speed", "Intelligence", "Durability"],
      heroes: [
        {
          id: 6553,
          name: "The B.R.A.I.N",
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
            "alter-egos": "The B.R.A.I.N",
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
        },
        {
          id: 6500,
          name: "Mathieu",
          biography: {
            aliases: ["Thomas"],
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
            durability: "43",
            intelligence: "73",
            speed: "100",
            strength: "18"
          },
          image: {
            url: Mathieu
          }
        },
        {
          id: 6501,
          name: "Alexis",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "88",
            intelligence: "11",
            speed: "27",
            strength: "36"
          },
          image: {
            url: Alexis
          }
        },
        {
          id: 6502,
          name: "Anabelle",
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
            durability: "32",
            intelligence: "63",
            speed: "29",
            strength: "16"
          },
          image: {
            url: Anabelle
          }
        },
        {
          id: 6503,
          name: "Benoit",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "58",
            intelligence: "96",
            speed: "83",
            strength: "98"
          },
          image: {
            url: Benoit
          }
        },
        {
          id: 6504,
          name: "Charles",
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
            durability: "61",
            intelligence: "22",
            speed: "63",
            strength: "48"
          },
          image: {
            url: Charles
          }
        },
        {
          id: 6505,
          name: "Corentin",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "55",
            intelligence: "76",
            speed: "97",
            strength: "39"
          },
          image: {
            url: Corentin
          }
        },
        {
          id: 6506,
          name: "Erwan",
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
            durability: "66",
            intelligence: "34",
            speed: "31",
            strength: "26"
          },
          image: {
            url: Erwan
          }
        },
        {
          id: 6507,
          name: "Fabien",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "84",
            intelligence: "98",
            speed: "73",
            strength: "23"
          },
          image: {
            url: Fabien
          }
        },
        {
          id: 6508,
          name: "Florentin",
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
            durability: "36",
            intelligence: "72",
            speed: "59",
            strength: "35"
          },
          image: {
            url: Florentin
          }
        },
        {
          id: 6509,
          name: "Gaetan",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "31",
            intelligence: "35",
            speed: "38",
            strength: "94"
          },
          image: {
            url: Gaetan
          }
        },
        {
          id: 6510,
          name: "Gautier",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "89",
            intelligence: "91",
            speed: "15",
            strength: "19"
          },
          image: {
            url: Gautier
          }
        },

        {
          id: 6511,
          name: "Justine",
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
            durability: "86",
            intelligence: "90",
            speed: "32",
            strength: "77"
          },
          image: {
            url: Justine
          }
        },
        {
          id: 6512,
          name: "Leuthsouline",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "6",
            intelligence: "42",
            speed: "77",
            strength: "89"
          },
          image: {
            url: Leuthsouline
          }
        },
        {
          id: 6513,
          name: "Lucas",
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
            durability: "100",
            intelligence: "75",
            speed: "79",
            strength: "53"
          },
          image: {
            url: Lucas
          }
        },
        {
          id: 6514,
          name: "Marthe",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "62",
            intelligence: "49",
            speed: "99",
            strength: "51"
          },
          image: {
            url: Marthe
          }
        },
        {
          id: 6515,
          name: "Michael",
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
            durability: "35",
            intelligence: "49",
            speed: "84",
            strength: "36"
          },
          image: {
            url: Michael
          }
        },
        {
          id: 6516,
          name: "Michel",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "89",
            intelligence: "85",
            speed: "82",
            strength: "61"
          },
          image: {
            url: Michel
          }
        },
        {
          id: 6517,
          name: "Moka",
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
            durability: "46",
            intelligence: "34",
            speed: "50",
            strength: "87"
          },
          image: {
            url: Moka
          }
        },
        {
          id: 6518,
          name: "Mohamed",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "76",
            intelligence: "1",
            speed: "21",
            strength: "26"
          },
          image: {
            url: Mohamed
          }
        },
        {
          id: 6519,
          name: "Nicolas",
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
            durability: "5",
            intelligence: "20",
            speed: "36",
            strength: "43"
          },
          image: {
            url: Nicolas
          }
        },
        {
          id: 6520,
          name: "Quentin",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "81",
            intelligence: "66",
            speed: "59",
            strength: "19"
          },
          image: {
            url: Quentin
          }
        },
        {
          id: 6521,
          name: "Robin",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "72",
            intelligence: "41",
            speed: "1",
            strength: "11"
          },
          image: {
            url: Robin
          }
        },
        {
          id: 6522,
          name: "Tantely",
          biography: {
            aliases: ["Thom"],
            alignment: "good",
            "alter-egos": "The B.R.A.I.N",
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
            durability: "61",
            intelligence: "99",
            speed: "69",
            strength: "13"
          },
          image: {
            url: Tantely
          }
        },
        {
          id: 6523,
          name: "Tony",
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
            durability: "52",
            intelligence: "51",
            speed: "76",
            strength: "62"
          },
          image: {
            url: Tony
          }
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
        isCardSelected: 0,
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

  // callApiSuperHeroes() {
  //   for (let i = 0; i < listHeroes.length; i++) {
  //     fetch(`http://superheroapi.com/api.php/2368931693133321/${listHeroes[i]}`)
  //       .then(results => results.json()) // conversion du résultat en JSON
  //       .then(data => {
  //         data.used = false;
  //         this.setState({
  //           battle: {
  //             ...this.state.battle,
  //             heroes: [...this.state.battle.heroes, data]
  //           }
  //         });
  //       });
  //   }
  // }

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
            const otherPlayer = name === "player_1" ? "player_2" : "player_1";
            if (this.state.battle[otherPlayer].nicknameChecked) {
              setTimeout(() => {
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
                      randomStat: getRandomNumber(
                        this.state.battle.stats.length
                      )
                    }
                  }
                });
              }, 4000);
            }
          },
          onPressEnterNicknameChecked: (event, name, nicknameLength) => {
            if (event.charCode === 13 && nicknameLength > 2) {
              this.setState(nicknameChecked(this.state, name));
              const otherPlayer = name === "player_1" ? "player_2" : "player_1";
              if (this.state.battle[otherPlayer].nicknameChecked) {
                setTimeout(() => {
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
                        randomStat: getRandomNumber(
                          this.state.battle.stats.length
                        )
                      }
                    }
                  });
                }, 4000);
              }
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
          closeCollapse: () => {
            this.setState({
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
              if (!this.state.battle.round.isCardSelected) {
                this.setState(
                  addSelectedHeroOnSelectedCard(this.state, idHero)
                );
                setTimeout(() => {
                  this.setState(changePlayer(this.state));
                }, 1000);
              }
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
