import React from "react";
import "./HomeNav.css";

import {
  Col,
  Row,
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

const HomeNav = () => (
  <nav>
    <CardDeck className="justify-content-center mx-auto">
      <Col xs={{ size: 4 }}>
        <a href="#">
          <Card>
            <div className="mt-3 d-flex justify-content-center">
              <i className="fas fa-bolt" />
            </div>
            <CardBody>
              <CardTitle>Start a Battle</CardTitle>
              <CardSubtitle>Find a Friend & Win!</CardSubtitle>
            </CardBody>
          </Card>
        </a>
      </Col>
      <Col xs={{ size: 4 }}>
        <a href="#">
          <Card>
            <div className="mt-3 d-flex justify-content-center">
              <i className="fas fa-list" />
            </div>
            <CardBody>
              <CardTitle>Stats</CardTitle>
              <CardSubtitle>Your History & Rankings</CardSubtitle>
            </CardBody>
          </Card>
        </a>
      </Col>
      <Col xs={{ size: 4 }}>
        <a href="#">
          <Card>
            <div className="mt-3 d-flex justify-content-center">
              <i className="fas fa-user-friends" />
            </div>
            <CardBody>
              <CardTitle>Heroes List</CardTitle>
              <CardSubtitle>About your Heroes</CardSubtitle>
            </CardBody>
          </Card>
        </a>
      </Col>
    </CardDeck>
  </nav>
);

export default HomeNav;
