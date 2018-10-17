import React, { Fragment } from "react"
import BattleContext from "../battle_context/BattleContext";
import { Button } from "reactstrap"

const BattleTransition = () => (
  <BattleContext.Consumer>
    {battle => (
      <Fragment>
        <h2>Round: {battle.state.battle.round.roundNumber}</h2>
        <h3>Player: {battle.state.battle.round.currentPlayer}</h3>
        <Button onClick={() => battle.handleChangeTransition()}>I'm ready !</Button>
      </Fragment>

    )}
  </BattleContext.Consumer>
)

export default BattleTransition