import React, { Fragment } from "react";
import BattleContext from "../battle_context/BattleContext";

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const rank_sort = (ranking) =>
  ranking.sort((person1, person2) => person2.win - person1.win);

const RankingTable = () => (
  <BattleContext.Consumer>
    {(battleContext) => (
      <Fragment>
        {battleContext.state.ranking[0].length > 0 && (
          <Fragment>
            <h2 className="text-center">RANKING</h2>
            <ListGroup className="text-center h5">
              {rank_sort(battleContext.state.ranking[0]).map((person) => (
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
);

export default RankingTable;
