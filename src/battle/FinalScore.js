import React, { Fragment } from 'react'
import { Button } from 'reactstrap'
import BattleContext from "../battle_context/BattleContext"
import { Link } from "react-router-dom";

const FinalScore = () => (
  <BattleContext.Consumer>
    {battleContext => (
      <Fragment>{battleContext.state.battle.player_1.score > battleContext.state.battle.player_2.score ? <h2>Player 1 WIN</h2> : <h2>Player 2 WIN</h2>}
        <Button onClick={() => battleContext.setRematch()}>Rematch?</Button>  <Link to="/"><Button onClick={() => battleContext.resetAllDataBattle()}>Go to Home</Button></Link>
      </Fragment>
    )}
  </BattleContext.Consumer>
)

export default FinalScore;