import React, { Component } from "react";
import BattleContext from "./BattleContext";
import changeNickname from "./changeNickname";
import nicknameChecked from "./nicknameChecked";

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
            this.setState(changeNickname(this.state, event, name)),
          submitCheck: name => {
            this.setState(nicknameChecked(this.state, name));
          }
        }}
      >
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleProvider;
