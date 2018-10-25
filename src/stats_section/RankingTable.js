import React, { Component, Fragment } from "react";
import BattleContext from "../battle_context/BattleContext";
import "./RankingTable.css";
import { Spring, Transition } from "react-spring";

const rank_sort = history =>
  history.sort((person1, person2) => person2.win - person1.win);

export const createRankingObject = history => {
  let rankingObject = {};
  for (let i = 0; i < history.length; i++) {
    if (rankingObject[history[i].winner.nickname] === undefined) {
      rankingObject[history[i].winner.nickname] = { win: 1, lose: 0 };
    } else {
      rankingObject[history[i].winner.nickname].win += 1;
    }
    if (rankingObject[history[i].loser.nickname] === undefined) {
      rankingObject[history[i].loser.nickname] = { win: 0, lose: 1 };
    } else {
      rankingObject[history[i].loser.nickname].lose += 1;
    }
  }
  return rankingObject;
};

export const createRankingTable = history => {
  const rankingTable = [];
  const rankingObject = createRankingObject(history);
  Object.keys(rankingObject).map(function(key, index) {
    rankingTable.push({
      name: key,
      win: rankingObject[key].win,
      lose: rankingObject[key].lose
    });
  });
  return rankingTable;
};

class RankingTable extends Component {
  render() {
    return (
      <BattleContext.Consumer>
        {battleContext => (
          <Fragment>
            {battleContext.state.history.length > 0 && (
              <div className="ranking-table">
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ delay: 200 }}
                >
                  {props => (
                    <h2 style={props} className="text-center">
                      RANKING
                    </h2>
                  )}
                </Spring>
                <table>
                  <tbody>
                    <Spring
                      from={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
                      to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                      config={{ delay: 200 }}
                    >
                      {props => (
                        <tr style={props} className="table-head">
                          <td>Rank</td>
                          <td>Player</td>
                          <td>Win</td>
                          <td>Lose</td>
                        </tr>
                      )}
                    </Spring>
                    <Transition
                      keys={rank_sort(
                        createRankingTable(battleContext.state.history)
                      ).map((person, index) => index)}
                      from={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
                      enter={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                      leave={{
                        opacity: 0,
                        scale: 0
                      }}
                      delay={300}
                    >
                      {rank_sort(
                        createRankingTable(battleContext.state.history)
                      ).map((person, index) => styles => (
                        <tr style={styles}>
                          <td>{index + 1}</td>
                          <td>{person.name}</td>
                          <td>{person.win}</td>
                          <td>{person.lose}</td>
                        </tr>
                      ))}
                    </Transition>
                  </tbody>
                </table>
              </div>
            )}
          </Fragment>
        )}
      </BattleContext.Consumer>
    );
  }
}

export default RankingTable;
