import React, { Component } from "react";
import BattleContext from "./BattleContext";

class BattleProvider extends Component {
  state = {
    battle: {
      player_1: {
        nickname: "",
        nicknameChecked: false
      },
      player_2: {
        nickname: "",
        nicknameChecked: false
      },
      round: {
        roundNumber: 1,
        roundStats: "",
        currentPlayer: "Mathieu"
      }
    }
  };

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
                  nickname: event.target.value.replace(/[ ]/, "")
                }
              }
            }),
          submitCheck: name => {
            this.setState({
              battle: {
                ...this.state.battle,
                [name]: {
                  ...this.state.battle[name],
                  nicknameChecked: true
                }
              }
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
