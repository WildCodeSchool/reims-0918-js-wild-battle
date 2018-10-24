import React from "react";
import { Transition, Spring } from "react-spring";
import "./HistoricTable.css";
import BattleContext from "../battle_context/BattleContext";

import {
  ListGroup,
  ListGroupItem,
  Card,
  CardTitle,
  CardText
} from "reactstrap";
const HistoricTable = () => (
  <BattleContext.Consumer>
    {battleContext => (
      <div className="historic-table">
        <h2 className="text-center">HISTORIC</h2>
        <ListGroup className="text-center h5">
          <Transition
            keys={battleContext.state.history
              .slice(0)
              .reverse()
              .map((match, index) => index)}
            from={{ opacity: 0, transform: "translate3d(100px,0,0)" }}
            enter={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            leave={{
              opacity: 0,
              scale: 0
            }}
            delay={300}
          >
            {battleContext.state.history
              .slice(0)
              .reverse()
              .map((match, index) => styles => (
                <ListGroupItem
                  style={styles}
                  className="border-dark p-0 player"
                  key={index}
                >
                  <Card inverse>
                    <CardTitle className="text-secondary date">
                      {match.date}
                    </CardTitle>
                    <div className="d-flex justify-content-around">
                      <CardText className="winner">
                        {match.winner.nickname} : {match.winner.score}
                      </CardText>
                      <CardText className="loser">
                        {match.loser.nickname} : {match.loser.score}
                      </CardText>
                    </div>
                  </Card>
                </ListGroupItem>
              ))}
          </Transition>
        </ListGroup>
      </div>
    )}
  </BattleContext.Consumer>
);
export default HistoricTable;
