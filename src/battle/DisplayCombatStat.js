import React, { Fragment } from "react";
import { Spring } from "react-spring";
import BattleContext from "../battle_context/BattleContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faBolt,
  faBook,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faDumbbell, faBolt, faBook, faShieldAlt);

const DisplayCombatStat = () => (
  <BattleContext.Consumer>
    {battleContext => (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} leave={{ opacity: 0 }}>
        {styles => (
          <h2 className="text-center" style={styles}>
            Fight on {"  "}
            <br className="d-sm-none d-md-inline" />
            <span className="mr-3 d-sm-none d-md-inline">
              {battleContext.state.battle.round.randomStat === 0 ? (
                <FontAwesomeIcon icon="dumbbell" />
              ) : battleContext.state.battle.round.randomStat === 1 ? (
                <FontAwesomeIcon icon="bolt" />
              ) : battleContext.state.battle.round.randomStat === 2 ? (
                <FontAwesomeIcon icon="book" />
              ) : (
                <FontAwesomeIcon icon="shield-alt" />
              )}
            </span>
            {
              battleContext.state.battle.stats[
                battleContext.state.battle.round.randomStat
              ]
            }
            <span className="ml-3">
              {battleContext.state.battle.round.randomStat === 0 ? (
                <FontAwesomeIcon icon="dumbbell" />
              ) : battleContext.state.battle.round.randomStat === 1 ? (
                <FontAwesomeIcon icon="bolt" />
              ) : battleContext.state.battle.round.randomStat === 2 ? (
                <FontAwesomeIcon icon="book" />
              ) : (
                <FontAwesomeIcon icon="shield-alt" />
              )}
            </span>
          </h2>
        )}
      </Spring>
    )}
  </BattleContext.Consumer>
);

export default DisplayCombatStat;
