import React from "react";

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const RankingTable = () => (
  <div>
    <h1 className="text-center">RANKING</h1>
    <ListGroup className="text-center h5">
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Florentin</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Nova</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>MathIeu</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>xX FaBien Xx</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>My name's Charles</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>King Quentin</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Pseudoless</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Dark Noob</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
    </ListGroup>
  </div>
);

export default RankingTable;
