import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import Scrollchor from "react-scrollchor";
import BattleContext from "../battle_context/BattleContext";

const HeroListFrame = ({ imageHero, nameHero, heroData }) => (
  <BattleContext.Consumer>
    {siteContext => (
      <Scrollchor
        to="#heroesListSection"
        beforeAnimate={() => siteContext.toggle(heroData)}
      >
        <Card className="list-heroes">
          <CardImg top width="100%" src={imageHero} alt="Card image cap" />
          <CardBody>
            <CardTitle className="cardTitleHero">{nameHero} </CardTitle>
          </CardBody>
        </Card>
      </Scrollchor>
    )}
  </BattleContext.Consumer>
);

export default HeroListFrame;
