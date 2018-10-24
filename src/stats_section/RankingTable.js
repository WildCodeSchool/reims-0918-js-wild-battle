import React, { Component, Fragment } from "react";
import BattleContext from "../battle_context/BattleContext"

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const rank_sort = (history) =>
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
  console.log(rankingObject)
  return rankingObject;

};

export const createRankingTable = history => {
  const rankingTable = [];
  const rankingObject = createRankingObject(history);
  Object.keys(rankingObject).map(function (key, index) {
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
        {(battleContext) => (

          <Fragment>
            {battleContext.state.history.length > 0 && (
              <Fragment>
                <h2 className="text-center">RANKING</h2>
                <ListGroup className="text-center h5">
                  {rank_sort(createRankingTable(battleContext.state.history)).map((person) => (
                    <ListGroupItem className="border-dark" key={person.name}>
                      <ListGroupItemHeading>{person.name}</ListGroupItemHeading>
                      <div className="d-flex justify-content-around">
                        <ListGroupItemText>Win: {person.win}</ListGroupItemText>
                        <ListGroupItemText>Lose: {person.lose}</ListGroupItemText>
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Fragment>
            )}
          </Fragment>
        )}
      </BattleContext.Consumer>
    )
  }
}

export default RankingTable;
