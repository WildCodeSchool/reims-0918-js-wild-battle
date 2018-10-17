import React, { Fragment } from "react"
import BattleContext from "../battle_context/BattleContext";
import { Button } from "reactstrap"

const BattleTransition = () => (
  <BattleContext.Consumer>
    {battleContext => (
      <Fragment>
        <h2>Round {battleContext.state.battle.round.roundNumber}</h2>
        <h3>{battleContext.state.battle[battleContext.state.battle.round.currentPlayer].nickname}'s turn</h3>
        <h3>Score: {battleContext.state.battle.player_1.score}:{battleContext.state.battle.player_2.score}</h3>
        <Button onClick={() => battleContext.handleChangeTransition()}>I'm ready !</Button>
      </Fragment>

    )}
  </BattleContext.Consumer>
)

export default BattleTransition