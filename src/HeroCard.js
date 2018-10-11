import React from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

const HeroCard = ({ selectedHeroOfList }) => (
  <div>
    <Card className="battleCard p-2">
      <CardTitle className="text-center">{selectedHeroOfList.name}</CardTitle>

      <CardImg
        top
        width="100%"
        src={selectedHeroOfList.image.url}
        alt="Card image cap"
      />
      <CardBody>
        <Row>
          <Col xs="3" className="text-center">
            <i className="fas fa-dumbbell" />
            <p>{selectedHeroOfList.powerstats.strength}</p>
          </Col>
          <Col xs="3" className="text-center">
            <i className="fas fa-bolt" />
            <p>{selectedHeroOfList.powerstats.speed}</p>
          </Col>
          <Col xs="3" className="text-center">
            <i className="fas fa-book" />
            <p>{selectedHeroOfList.powerstats.intelligence}</p>
          </Col>
          <Col xs="3" className="text-center">
            <i className="fas fa-shield-alt" />
            <p>{selectedHeroOfList.powerstats.durability}</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </div>
);

export default HeroCard;
