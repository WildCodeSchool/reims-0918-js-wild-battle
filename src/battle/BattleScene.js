import React, { Component, Fragment } from "react";
import UsernameChoice from "./UsernameChoice";
import CombatScene from "./CombatScene";
import BattleContext from "../battle_context/BattleContext";
import CombatResult from "./CombatResult";
import FinalScore from "./FinalScore";

class BattleScene extends Component {
  render() {
    return (
      <Fragment>
        <BattleContext.Consumer>
          {battleContext => (
            <Fragment>
              {battleContext.state.battle.round.roundNumber === 0 ? (
                <UsernameChoice />
              ) : !battleContext.state.battle.round.roundFinished ? (
                <CombatScene />
              ) : !battleContext.state.battle.round.matchFinished ? (
                <CombatResult />
              ) : (
                <FinalScore />
              )}
            </Fragment>
          )}
        </BattleContext.Consumer>
      </Fragment>
    );
  }
}
export default BattleScene;
