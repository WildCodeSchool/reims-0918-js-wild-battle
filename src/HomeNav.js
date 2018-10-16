import React from "react";
import "./HomeNav.css";
import { Link } from "react-router-dom"

import {
  Col,
  Card,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const HomeNav = () => (
  <nav className="navHome">
    <CardDeck className="justify-content-center mx-auto mt-5">
      <Col md="5" lg="3" className="mb-2">
        <Link to="/Battle">
          <Card>
            <div className="mt-3 py-5 d-flex justify-content-center">
              <i className="fas fa-bolt fa-9x" />
            </div>
            <CardBody className="m-3">
              <CardTitle className="glitch">Start a Battle</CardTitle>
              <CardSubtitle>Find a Friend &amp; Win!</CardSubtitle>
            </CardBody>
          </Card>
        </Link>
      </Col>
      <Col md="5" lg="3" className="mb-2">
        <Link to="/Stats">
          <Card>
            <div className="mt-3 py-5 d-flex justify-content-center">
              <i className="fas fa-list fa-9x" />
            </div>
            <CardBody className="m-3">
              <CardTitle>Stats</CardTitle>
              <CardSubtitle>History &amp; Rankings</CardSubtitle>
            </CardBody>
          </Card>
        </Link>
      </Col>
      <Col md="5" lg="3" className="mb-2">
        <Link to="/HeroesListing">
          <Card>
            <div className="mt-3 py-5 d-flex justify-content-center">
              <i className="fas fa-user-friends fa-9x" />
            </div>
            <CardBody className="m-3">
              <CardTitle>Heroes List</CardTitle>
              <CardSubtitle>About your Heroes</CardSubtitle>
            </CardBody>
          </Card>
        </Link>
      </Col>
    </CardDeck>
  </nav>
);

export default HomeNav;
