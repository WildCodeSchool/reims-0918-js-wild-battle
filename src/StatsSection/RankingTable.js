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
    <ListGroup className="text-center">
      <ListGroupItem>
        <ListGroupItemHeading>Florentin</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Nova</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>MathIeu</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>xX FaBien Xx</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>My name's Charles</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>King Quentin</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Pseudoless</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem>
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
