import React from "react";

import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Progress
} from "reactstrap";

const HistoricTable = () => (
  <div>
    <h1 className="text-center">HISTORIC</h1>
    <ListGroup className="text-center h5">
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Date: 03/10/2018 11:15</ListGroupItemHeading>
        <Progress multi>
          <Progress color="success" value="50">
            Florentin: Win
          </Progress>
          <Progress color="info" value="50">
            Mathieu: Lose
          </Progress>
        </Progress>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Date: 03/10/2018 11:15</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Florentin: Win</ListGroupItemText>
          <ListGroupItemText>Mathieu: Lose</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Date: 03/10/2018 11:15</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Florentin: Win</ListGroupItemText>
          <ListGroupItemText>Mathieu: Lose</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Date: 03/10/2018 11:15</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Florentin: Win</ListGroupItemText>
          <ListGroupItemText>Mathieu: Lose</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Date: 03/10/2018 11:15</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Florentin: Win</ListGroupItemText>
          <ListGroupItemText>Mathieu: Lose</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Date: 03/10/2018 11:15</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Florentin: Win</ListGroupItemText>
          <ListGroupItemText>Mathieu: Lose</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Date: 03/10/2018 11:15</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Florentin: Win</ListGroupItemText>
          <ListGroupItemText>Mathieu: Lose</ListGroupItemText>
        </div>
      </ListGroupItem>
      <ListGroupItem className="border-dark">
        <ListGroupItemHeading>Date: 03/10/2018 11:15</ListGroupItemHeading>
        <div className="d-flex justify-content-around">
          <ListGroupItemText>Florentin: Win</ListGroupItemText>
          <ListGroupItemText>Mathieu: Lose</ListGroupItemText>
        </div>
      </ListGroupItem>
    </ListGroup>
  </div>
);

export default HistoricTable;
