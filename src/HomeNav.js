import React from "react";
import "./HomeNav.css";

import {
  Col,
  Card,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

const HomeNav = () => (
  <nav className="navHome 100vh">
    <CardDeck className="justify-content-center mx-auto mt-5">
      <Col md="5" lg="3" className="mb-2">
        <a href="#usernameSection">
          <Card>
            <div className="mt-3 py-5 d-flex justify-content-center">
              <i className="fas fa-bolt" />
            </div>
            <CardBody className="m-3">
              <CardTitle>Start a Battle</CardTitle>
              <CardSubtitle>Find a Friend & Win!</CardSubtitle>
            </CardBody>
          </Card>
        </a>
      </Col>
      <Col md="5" lg="3" className="mb-2">
        <a href="#statsSection">
          <Card>
            <div className="mt-3 py-5 d-flex justify-content-center">
              <i className="fas fa-list" />
            </div>
            <CardBody className="m-3">
              <CardTitle>Stats</CardTitle>
              <CardSubtitle>History & Rankings</CardSubtitle>
            </CardBody>
          </Card>
        </a>
      </Col>
      <Col md="5" lg="3" className="mb-2">
        <a href="heroesListSection">
          <Card>
            <div className="mt-3 py-5 d-flex justify-content-center">
              <i className="fas fa-user-friends" />
            </div>
            <CardBody className="m-3">
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
