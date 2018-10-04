import React from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

const HeroCard = () => (
  <div>
    <Card className="p-2">
      <CardTitle className="text-center">Super Hero Name</CardTitle>
      <CardImg
        top
        width="100%"
        src="https://via.placeholder.com/150x150"
        alt="Card image cap"
      />
      <CardBody>
        <Row>
          <Col xs="3" className="text-center">
            <i className="fas fa-dumbbell" />
            <p>46</p>
          </Col>
          <Col xs="3" className="text-center">
            <i className="fas fa-bolt" />
            <p>46</p>
          </Col>
          <Col xs="3" className="text-center">
            <i className="fas fa-book" />
            <p>46</p>
          </Col>
          <Col xs="3" className="text-center">
            <i className="fas fa-shield-alt" />
            <p>46</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </div>
);

export default HeroCard;
