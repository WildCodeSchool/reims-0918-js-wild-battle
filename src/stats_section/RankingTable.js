import React from "react";
import ranking from "./Ranking.json";

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const rank_sort = (ranking) =>
  ranking.sort((person1, person2) => person2.win - person1.win);

const RankingTable = () => (
  <div>
    <h2 className="text-center">RANKING</h2>
    <ListGroup className="text-center h5">
      {rank_sort(ranking).map((person) => (
        <ListGroupItem className="border-dark" key={person.id}>
          <ListGroupItemHeading>{person.name}</ListGroupItemHeading>
          <div className="d-flex justify-content-around">
            <ListGroupItemText>Win: {person.win}</ListGroupItemText>
            <ListGroupItemText>Lose: {person.lose}</ListGroupItemText>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

export default RankingTable;
