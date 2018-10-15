import React, { Component } from "react";
import BattleContext from "./BattleContext";

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

class BattleProvider extends Component {
  state = {
    battle: {
      heroes: [],
      player_1: {
        nickname: "",
        nicknameChecked: false,
      },
      player_2: {
        nickname: "",
        nicknameChecked: false,
      },
      round: {
        roundNumber: 1,
        roundStats: "",
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
            this.setState({
              battle: {
                ...this.state.battle,
                [name]: {
                  ...this.state.battle[name],
                  nickname: event.target.value.replace(/[ ]/, ""),
                },
              },
            }),
          submitCheck: (name) => {
            this.setState({
              battle: {
                ...this.state.battle,
                [name]: {
                  ...this.state.battle[name],
                  nicknameChecked: true,
                },
              },
            });
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
        }}
      >
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleProvider;
