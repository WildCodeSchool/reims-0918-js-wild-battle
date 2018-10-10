import React from "react";
import { Row, Col, Form, FormGroup, Input, Collapse } from "reactstrap";
import HeroListFrame from "./HeroListFrame";
import HeroCard from "../HeroCard";
import HeroBiography from "./HeroBiography";

const HeroesListing = ({ heroes, collapse, toggle }) => (
  <section id="heroesListSection">
    <Row>
      <h2>Heroes List</h2>
      <Form>
        <FormGroup>
          <Input type="search" name="searchCard" placeholder="Search a card" />
        </FormGroup>
      </Form>
    </Row>
    <Collapse isOpen={collapse}>
      <Row>
        <Col sm="12" md={{ size: 3, offset: 2 }}>
          <HeroCard
            nameHero="Batman"
            imageHero="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
            str="26"
            wise="100"
            speed="27"
            durability="50"
            id="demo"
          />
        </Col>
        <Col sm="12" md={{ size: 6, offset: 1 }}>
          <HeroBiography />
        </Col>
      </Row>
    </Collapse>
    <Row>
      {heroes.sort((a, b) => a.name.localeCompare(b.name)).map(hero => (
        <Col onClick={toggle} className="my-3" xs="4" md="3" lg="2">
          <HeroListFrame
            id={hero.id}
            imageHero={hero.image.url}
            nameHero={hero.name}
          />
        </Col>
      ))}
    </Row>
  </section>
);

export default HeroesListing;
