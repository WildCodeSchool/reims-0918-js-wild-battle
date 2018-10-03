import React from "react";
import BackgroundHistoric from "../img/greenred.png"

import {
  ListGroup,
  ListGroupItem,
//   ListGroupItemHeading,
//   ListGroupItemText,
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
    date: "10/03/2018 11:15",
    player1Score: "Win",
    player2Score: "Lose"
  },
  {
    player1: "Mathieu",
    player2: "Florentin",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Michael",
    player2: "Florentin",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Fabien",
    player2: "Michael",
    date: "10/03/2018 11:15",
    player1Score: "Win",
    player2Score: "Lose"
  },
  {
    player1: "Thomas",
    player2: "Clément",
    date: "10/03/2018 11:15",
    player1Score: "Win",
    player2Score: "Lose"
  },
  {
    player1: "Clément",
    player2: "Romain",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Romain",
    player2: "Thomas",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Quentin",
    player2: "Corentin",
    date: "10/03/2018 11:15",
    player1Score: "Lose",
    player2Score: "Win"
  },
  {
    player1: "Charles",
    player2: "Robin",
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
        <ListGroupItem className="border-dark p-0">
          <Card inverse>
            <CardImg
              width="100%"
              src={BackgroundHistoric}
              alt="greenred"
              height="90"
              rotate="180"
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
