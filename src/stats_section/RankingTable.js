import React from "react";

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const ranking = [
  {
    name: "Florentin",
    win: "3",
    lose: "0"
  },
  {
    name: "Thomas",
    win: "2",
    lose: "0"
  },
  {
    name: "Fabien",
    win: "1",
    lose: "0"
  },
  {
    name: "Corentin",
    win: "4",
    lose: "0"
  },
  {
    name: "Charles",
    win: "1",
    lose: "0"
  },
  {
    name: "Romain",
    win: "1",
    lose: "1"
  },
  {
    name: "Quentin",
    win: "5",
    lose: "1"
  },
  {
    name: "Robin",
    win: "0",
    lose: "1"
  },
  {
    name: "Michaël",
    win: "0",
    lose: "2"
  }
];

const rank_sort = ranking =>
  ranking.sort((person1, person2) => person2.win - person1.win);

const RankingTable = () => (
  <div>
    <h1 className="text-center">RANKING</h1>
    <ListGroup className="text-center h5">
      {rank_sort(ranking).map(person => (
        <ListGroupItem className="border-dark">
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
