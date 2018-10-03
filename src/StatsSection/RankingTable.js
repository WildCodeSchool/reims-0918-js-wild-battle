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
        <ListGroupItemText>Win: 7 / Lose: 3</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Nova</ListGroupItemHeading>
        <ListGroupItemText>Win: 7 / Lose: 3</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>MathIeu</ListGroupItemHeading>
        <ListGroupItemText>Win: 7 / Lose: 3</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>xX FaBien Xx</ListGroupItemHeading>
        <ListGroupItemText>Win: 7 / Lose: 3</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>My name's Charles</ListGroupItemHeading>
        <ListGroupItemText>Win: 7 / Lose: 3</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>King Quentin</ListGroupItemHeading>
        <ListGroupItemText>Win: 7 / Lose: 3</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Pseudoless</ListGroupItemHeading>
        <ListGroupItemText>Win: 7 / Lose: 3</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Dark Noob</ListGroupItemHeading>
        <ListGroupItemText>Win: 7 / Lose: 3</ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  </div>
);

export default RankingTable;
