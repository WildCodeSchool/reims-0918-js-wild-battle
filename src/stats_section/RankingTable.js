import React, { Fragment } from "react";
import BattleContext from "../battle_context/BattleContext";
import "./RankingTable.css";

import { ListGroup, ListGroupItem, ListGroupItemText } from "reactstrap";

const rank_sort = ranking =>
  ranking.sort((person1, person2) => person2.win - person1.win);

const RankingTable = () => (
  <BattleContext.Consumer>
    {battleContext => (
      <Fragment>
        {battleContext.state.ranking.length > 0 && (
          <div className="ranking-table">
            <h2 className="text-center">RANKING</h2>
            <ListGroup className="text-center h5">
              {rank_sort(battleContext.state.ranking).map((person, index) => (
                <ListGroupItem key={person.name}>
                  <div className="d-flex justify-content-around">
                    <ListGroupItemText>
                      <span>{index + 1}</span>
                    </ListGroupItemText>
                    <ListGroupItemText>
                      <span>{person.name}</span>
                    </ListGroupItemText>
                    <ListGroupItemText className="winNumber">
                      Win: <span>{person.win}</span>
                    </ListGroupItemText>
                    <ListGroupItemText className="loseNumber">
                      Lose: <span>{person.lose}</span>
                    </ListGroupItemText>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        )}
      </Fragment>
    )}
  </BattleContext.Consumer>
);

export default RankingTable;
