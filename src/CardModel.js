import React from "react";
import { Card, CardImg, CardDeck, CardBody, CardTitle } from "reactstrap";

const CardModel = () => (
  <div>
    <CardDeck>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://via.placeholder.com/150x150"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Super Hero Name</CardTitle>
        </CardBody>
      </Card>
    </CardDeck>
  </div>
);

export default CardModel;
