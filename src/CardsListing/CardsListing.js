import React from "react";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";
import CardListFrame from "./CardListFrame";
import CardModel from "../CardModel";

const CardsListing = () => (
  <section>
    <Row>
      <h2>Heroes's List</h2>
      <Form>
        <FormGroup>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search placeholder"
          />
        </FormGroup>
      </Form>
    </Row>{" "}
    <Row>
      <Col xs="6">
        <CardModel />
      </Col>
    </Row>
    <Row>
      <Col xs="4" md="3" lg="2">
        <CardListFrame />
      </Col>
      <Col xs="4" md="3" lg="2">
        <CardListFrame />
      </Col>
      <Col xs="4" md="3" lg="2">
        <CardListFrame />
      </Col>
      <Col xs="4" md="3" lg="2">
        <CardListFrame />
      </Col>
      <Col xs="4" md="3" lg="2">
        <CardListFrame />
      </Col>
      <Col xs="4" md="3" lg="2">
        <CardListFrame />
      </Col>
      <Col xs="4" md="3" lg="2">
        <CardListFrame />
      </Col>
      <Col xs="4" md="3" lg="2">
        <CardListFrame />
      </Col>
    </Row>
  </section>
);

export default CardsListing;
