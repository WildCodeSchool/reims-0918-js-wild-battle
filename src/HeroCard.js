import React from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import BattleContext from "./battle_context/BattleContext";

const HeroCard = () => (
  <BattleContext.Consumer>
    {(siteContext) => (
      <div>
        <Card className="battleCard p-2">
          <CardTitle className="text-center">
            {siteContext.state.selectedHeroOfList.name}
          </CardTitle>

          <CardImg
            top
            width="100%"
            src={siteContext.state.selectedHeroOfList.image.url}
            alt="Card image cap"
          />
          <CardBody>
            <Row>
              <Col xs="3" className="text-center">
                <i className="fas fa-dumbbell" />
                <p>
                  {siteContext.state.selectedHeroOfList.powerstats.strength}
                </p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="fas fa-bolt" />
                <p>{siteContext.state.selectedHeroOfList.powerstats.speed}</p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="fas fa-book" />
                <p>
                  {siteContext.state.selectedHeroOfList.powerstats.intelligence}
                </p>
              </Col>
              <Col xs="3" className="text-center">
                <i className="fas fa-shield-alt" />
                <p>
                  {siteContext.state.selectedHeroOfList.powerstats.durability}
                </p>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )}
  </BattleContext.Consumer>
);

export default HeroCard;
