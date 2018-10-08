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
    id: "1",
    win: "42",
    lose: "0"
  },
  {
    name: "Thomas",
    id: "2",
    win: "2",
    lose: "0"
  },
  {
    name: "Fabien",
    id: "3",
    win: "1",
    lose: "0"
  },
  {
    name: "Corentin",
    id: "4",
    win: "4",
    lose: "0"
  },
  {
    name: "Charles",
    id: "5",
    win: "1",
    lose: "0"
  },
  {
    name: "Romain",
    id: "6",
    win: "1",
    lose: "1"
  },
  {
    name: "Quentin",
    id: "7",
    win: "5",
    lose: "1"
  },
  {
    name: "Robin",
    id: "8",
    win: "0",
    lose: "1"
  },
  {
    name: "Michaël",
    id: "9",
    win: "50",
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
