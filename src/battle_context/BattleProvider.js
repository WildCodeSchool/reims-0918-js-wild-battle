import React, { Component } from "react";
import BattleContext from "./Battlecontext";

class BattleContext extends Component {
  state = {
    battle: {
      player_1: {
        nickname: "",
        nicknameCheck: false
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
    }
  }

  render(){
    return(

    )
  }
}

export default BattleContext;
