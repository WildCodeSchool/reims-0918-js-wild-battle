import React from "react";
import BackgroundHistoric from "../img/greenred.png";
import "./HistoricTable.css";
import battleHistoric from "./Historic.json";

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
  <div>
    <h1 className="text-center">HISTORIC</h1>
    <ListGroup className="text-center h5">
      {battleHistoric.map((battleData) => (
        <ListGroupItem className="border-dark p-0" key={battleData.id}>
          <Card inverse>
            <CardImg
              width="100%"
              src={BackgroundHistoric}
              alt="greenred"
              height="95"
              className={battleData.player1Score === "Lose" ? "rotateImg" : ""}
            />
            <CardImgOverlay>
              <CardTitle>{battleData.date}</CardTitle>
              <div className="d-flex justify-content-around">
                <CardText>
                  {battleData.player1} : {battleData.player1Score}
                </CardText>
                <CardText>
                  {battleData.player2} : {battleData.player2Score}
                </CardText>
              </div>
            </CardImgOverlay>
          </Card>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

export default HistoricTable;
