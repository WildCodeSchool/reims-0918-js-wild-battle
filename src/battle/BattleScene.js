import React, { Component, Fragment } from "react";
import UsernameChoice from "./UsernameChoice";
import CombatScene from "./CombatScene";
import BattleContext from "../battle_context/BattleContext";

class BattleScreen extends Component {
  render() {
    return (
      <Fragment>
        <BattleContext.Consumer>
          {battleContext => (
            <Fragment>
              {battleContext.state.battle.round.roundNumber === 0 ? (
                <UsernameChoice />
              ) : (
                <CombatScene />
              )}
            </Fragment>
          )}
        </BattleContext.Consumer>
      </Fragment>
    );
  }
}
export default BattleScreen;
