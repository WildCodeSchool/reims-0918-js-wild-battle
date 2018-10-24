import React from "react";
import BackgroundHistoric from "../img/greenred.png";
import "./HistoricTable.css";
import BattleContext from "../battle_context/BattleContext"

import {
  ListGroup,
  ListGroupItem,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
} from "reactstrap";

const HistoricTable = () => (
  <BattleContext.Consumer>
    {(battleContext) => (
      <div>

        <h2 className="text-center">HISTORIC</h2>
        <ListGroup className="text-center h5">
          {battleContext.state.history.slice(0).reverse().map((match, index) => (
            <ListGroupItem className="border-dark p-0" key={index}>
              <Card inverse>
                <CardImg
                  width="100%"
                  src={BackgroundHistoric}
                  alt="greenred"
                  height="95"
                />
                <CardImgOverlay>
                  <CardTitle>{match.date}</CardTitle>
                  <div className="d-flex justify-content-around">
                    <CardText>
                      {match.winner.nickname} : {match.winner.score}
                    </CardText>
                    <CardText>
                      {match.loser.nickname} : {match.loser.score}
                    </CardText>
                  </div>
                </CardImgOverlay>
              </Card>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    )}
  </BattleContext.Consumer>
);

export default HistoricTable;
