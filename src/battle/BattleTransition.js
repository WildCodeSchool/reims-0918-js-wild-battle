import React from "react"
import BattleContext from "../battle_context/BattleContext";
import { Button } from "reactstrap"

const BattleTransition = () => (
  <BattleContext.Consumer>
    {battle => (
      <Button onClick={() => battle.handleChangeTransition()}>I'm ready !</Button>
    )}
  </BattleContext.Consumer>
)

export default BattleTransition