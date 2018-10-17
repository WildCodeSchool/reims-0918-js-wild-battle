import React, { Fragment } from 'react'
import BattleTransition from './BattleTransition';
import BattleContext from "../battle_context/BattleContext"
import CombatInit from "./CombatInit"

const CombatScene = () => (
  <BattleContext>
    {battleContext => (
      <Fragment>
        {/* {battleContext.state.battle.round.currentPlayer === 1 && (battleContext.getRandomInt())} */}

        {battleContext.state.battle.round.transition ?
          (<BattleTransition />
          ) : (
            <CombatInit />
          )
        }
      </Fragment>
    )}
  </BattleContext>

)

export default CombatScene
