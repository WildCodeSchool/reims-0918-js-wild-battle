import React, { Fragment } from "react";
import BattleContext from "../battle_context/BattleContext";
import "./WinOrLose.css";

const WinOrLose = ({ player1, player2 }) => (
  <BattleContext.Consumer>
    {battleContext => (
      <Fragment>
        {battleContext.state.battle.round.roundWinner === player1 ? (
          <h2 className="win">WIN</h2>
        ) : battleContext.state.battle.round.roundWinner === player2 ? (
          <h2 className="lose">LOSE</h2>
        ) : (
          <h2> </h2>
        )}
      </Fragment>
    )}
  </BattleContext.Consumer>
);

export default WinOrLose;
