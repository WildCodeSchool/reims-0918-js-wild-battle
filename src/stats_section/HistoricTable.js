import React from "react";
import BackgroundHistoric from "../img/greenred.png";
import "./HistoricTable.css";

import {
  ListGroup,
  ListGroupItem,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay
} from "reactstrap";

const battleHistoric = [
  {
    player1: "Florentin",
    player2: "Mathieu",
    id: "1",
    date: "10/03/2018 11:15",
    player1Score: "Win",
    player2Score: "Lose"
  },
  {
    player1: "Mathieu",
    player2: "Florentin",
    id: "2",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Michael",
    player2: "Florentin",
    id: "3",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Fabien",
    player2: "Michael",
    id: "4",
    date: "10/03/2018 11:15",
    player1Score: "Win",
    player2Score: "Lose"
  },
  {
    player1: "Thomas",
    player2: "Clément",
    id: "5",
    date: "10/03/2018 11:15",
    player1Score: "Win",
    player2Score: "Lose"
  },
  {
    player1: "Clément",
    player2: "Romain",
    id: "6",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Romain",
    player2: "Thomas",
    id: "7",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Quentin",
    player2: "Corentin",
    id: "8",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Charles",
    player2: "Robin",
    id: "9",
    date: "10/03/2018 11:15",
    player1Score: "Win",
    player2Score: "Lose"
  }
];

const HistoricTable = () => (
  <div>
    <h1 className="text-center">HISTORIC</h1>
    <ListGroup className="text-center h5">
      {battleHistoric.map(battleData => (
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
