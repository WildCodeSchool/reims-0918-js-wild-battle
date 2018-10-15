import React, { Fragment } from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import BattleContext from "./battle_context/BattleContext";

const HeroCard = () => (
  <BattleContext.Consumer>
    {(hero) => (
      <Fragment>
        <Card className="battleCard p-2">
          <CardTitle className="text-center">
            {hero.state.selectedHeroOfList.name}
          </CardTitle>

          <CardImg
            top
            width="100%"
            src={hero.state.selectedHeroOfList.image.url}
            alt="Card image cap"
          />
          <CardBody>
            <Row>
              <Col xs="3" className="text-center">
                <i className="fas fa-dumbbell" />
                <p>{hero.state.selectedHeroOfList.powerstats.strength}</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="fas fa-bolt" />
                <p>{hero.state.selectedHeroOfList.powerstats.speed}</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="fas fa-book" />
                <p>{hero.state.selectedHeroOfList.powerstats.intelligence}</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="fas fa-shield-alt" />
                <p>{hero.state.selectedHeroOfList.powerstats.durability}</p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Fragment>
    )}
  </BattleContext.Consumer>
);

export default HeroCard;
