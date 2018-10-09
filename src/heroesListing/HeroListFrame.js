import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const HeroListFrame = ({ imageHero, nameHero, getSelectedHero }) => (
  <a onClick={() => getSelectedHero} id="1" href="#demo">
    <Card>
      <CardImg top width="100%" src={imageHero} alt="Card image cap" />
      <CardBody>
        <CardTitle>{nameHero}</CardTitle>
      </CardBody>
    </Card>
  </a>
);

export default HeroListFrame;
