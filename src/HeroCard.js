import React from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

const HeroCard = ({ nameHero, imageHero, str, wise, speed, durability }) => (
  <div>
    <Card className="p-2">
      <CardTitle className="text-center">{nameHero}</CardTitle>
      <CardImg top width="100%" src={imageHero} alt="Card image cap" />
      <CardBody>
        <Row>
          <Col xs="3" className="text-center">
            <i className="fas fa-dumbbell" />
            <p>{str}</p>
          </Col>
          <Col xs="3" className="text-center">
            <i className="fas fa-bolt" />
            <p>{wise}</p>
          </Col>
          <Col xs="3" className="text-center">
            <i className="fas fa-book" />
            <p>{speed}</p>
          </Col>
          <Col xs="3" className="text-center">
            <i className="fas fa-shield-alt" />
            <p>{durability}</p>
          </Col>
        </Row>
        <Row />
      </CardBody>
    </Card>
  </div>
);

export default HeroCard;
