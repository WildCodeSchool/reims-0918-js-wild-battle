import React from "react";
import { Transition, Spring } from "react-spring";
import "./HistoricTable.css";
import battleHistoric from "./Historic.json";

import {
  ListGroup,
  ListGroupItem,
  Card,
  CardTitle,
  CardText
} from "reactstrap";

const HistoricTable = () => (
  <div className="historic-table">
    <h2 className="text-center">HISTORIC</h2>

    <ListGroup className="text-center h5">
      <Transition
        keys={battleHistoric.map(battleData => battleData.id)}
        from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
        enter={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        leave={{
          opacity: 0,
          scale: 0
        }}
        delay={300}
      >
        {battleHistoric.map(battleData => styles => (
          <ListGroupItem
            style={styles}
            className="p-0 mb-3"
            key={battleData.id}
          >
            <Card>
              <CardTitle className="text-secondary date">
                {battleData.date}
              </CardTitle>
              <div className="d-flex player justify-content-around">
                <CardText className="winner">
                  <span>{battleData.player1} : </span>
                  {battleData.player1Score}
                </CardText>
                <CardText className="loser">
                  <span>{battleData.player2} : </span>
                  {battleData.player2Score}
                </CardText>
              </div>
            </Card>
          </ListGroupItem>
        ))}
      </Transition>
    </ListGroup>
  </div>
);

export default HistoricTable;
