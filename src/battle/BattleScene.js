import React, { Component, Fragment } from "react";
import UsernameChoice from "./UsernameChoice";
import CombatScene from "./CombatScene";
import BattleContext from "../battle_context/BattleContext";
import CombatResult from "./CombatResult";
import FinalScore from "./FinalScore";
import Header from "../Header";
import Footer from "../Footer";

class BattleScene extends Component {
  render() {
    return (
      <Fragment>
        <Header mobileDisplay />
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
        <Footer mobileDisplay={true} />
      </Fragment>
    );
  }
}
export default BattleScene;
