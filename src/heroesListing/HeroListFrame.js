import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import Scrollchor from 'react-scrollchor';

const HeroListFrame = ({ imageHero, nameHero, toggle, heroData }) => (
  <Scrollchor to="#heroesListSection" beforeAnimate={() => toggle(heroData)}>
    <Card>
      <CardImg top width="100%" src={imageHero} alt="Card image cap" />
      <CardBody>
        <CardTitle>{nameHero} </CardTitle>
      </CardBody>
    </Card>
  </Scrollchor>
);

export default HeroListFrame;
