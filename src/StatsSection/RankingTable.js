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
      <ListGroupItem className="border-dark" color="primary"> {/* Color not definitive */}
        <ListGroupItemHeading>Florentin</ListGroupItemHeading>
        <div className="d-flex justify-content-around"> {/* d-flex for to separate win and lose */}
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark" color="success">
        <ListGroupItemHeading>Nova</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark" color="info">
        <ListGroupItemHeading>MathIeu</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark" color="warning">
        <ListGroupItemHeading>xX FaBien Xx</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark" color="danger"> {/* i know, not "danger" in code but it's temporary */}
        <ListGroupItemHeading>My name's Charles</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark" color="success">
        <ListGroupItemHeading>King Quentin</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark" color="info">
        <ListGroupItemHeading>Pseudoless</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Win: 7</ListGroupItemText>
          <ListGroupItemText>Lose: 3</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark" color="warning">
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
