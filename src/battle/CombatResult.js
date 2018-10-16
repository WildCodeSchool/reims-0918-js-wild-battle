import React from "react"
import BattleContext from "../battle_context/BattleContext"

const CombatResult = () => (
  <BattleContext.Consumer>

    {battle => (
      <Col xs="4">
        <h2>
          Fight on{" "}
          {
            context.state.battle.stats[
            context.state.battle.round.randomStat
            ]
          }
        </h2>
        <h3>
          {
            context.state.battle.player_1.selectedCard[0]
              .powerstats[
            context.state.battle.stats[
              context.state.battle.round.randomStat
            ].toLowerCase()
            ]
          }
          <span> VS </span>
          {
            context.state.battle.player_2.selectedCard[0]
              .powerstats[
            context.state.battle.stats[
              context.state.battle.round.randomStat
            ].toLowerCase()
            ]
          }
        </h3>

        {context.state.battle.player_1.selectedCard[0].powerstats[
          context.state.battle.stats[
            context.state.battle.round.randomStat
          ].toLowerCase()
        ] -
          context.state.battle.player_2.selectedCard[0].powerstats[
          context.state.battle.stats[
            context.state.battle.round.randomStat
          ].toLowerCase()
          ] >
          0 ? (
            <h2 className="text-success FontBangers">Win</h2>
          ) : context.state.battle.player_1.selectedCard[0]
            .powerstats[
            context.state.battle.stats[
              context.state.battle.round.randomStat
            ].toLowerCase()
          ] -
            context.state.battle.player_2.selectedCard[0].powerstats[
            context.state.battle.stats[
              context.state.battle.round.randomStat
            ].toLowerCase()
            ] ===
            0 ? (
              <button onClick={() => context.getRandomInt()}>
                New Fight
                      </button>
            ) : (
              <h2 className="text-danger FontBangers">Lose</h2>
            )}
      </Col>
    )}
  </BattleContext.Consumer>
)

export default CombatResult