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
    win: "1",
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
    win: "0",
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

const RankingTable = () => (
  <div>
    <h1 className="text-center">RANKING</h1>
    <ListGroup className="text-center h5">
      {ranking.map(rank => (
        <ListGroupItem className="border-dark">
          <ListGroupItemHeading>{rank.name}</ListGroupItemHeading>
          <div className="d-flex justify-content-around">
            <ListGroupItemText>Win: {rank.win}</ListGroupItemText>
            <ListGroupItemText>Lose: {rank.lose}</ListGroupItemText>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

export default RankingTable;
