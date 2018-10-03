import React from "react";

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
    <Row>
      <CardDeck className="justify-content-center mx-auto">
        <Col xs={{ size: 4 }}>
          <a href="#">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
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
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Stats</CardTitle>
                <CardSubtitle>View of your History</CardSubtitle>
              </CardBody>
            </Card>
          </a>
        </Col>
        <Col xs={{ size: 4 }}>
          <a href="#">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Heroes List</CardTitle>
                <CardSubtitle>More about your Heroes</CardSubtitle>
              </CardBody>
            </Card>
          </a>
        </Col>
      </CardDeck>
    </Row>
  </nav>
);

export default HomeNav;
