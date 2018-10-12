import React from "react";
import { Container, Row, Col, Form, FormGroup, Input, Collapse } from "reactstrap";
import HeroListFrame from "./HeroListFrame";
import HeroCard from "../HeroCard";
import HeroBiography from "./HeroBiography";
import "./HeroesListing.css"

const HeroesListing = ({ heroes, collapse, isCollapse, toggle, selectedHeroOfList, searchInputHeroList, handleSearchListChange }) => (
  <section id="heroesListSection">
    <Container fluid>
      <Row>
        <h2 className="mr-3">Heroes List</h2>
        <Form>
          <FormGroup>
            <Input onChange={handleSearchListChange} value={searchInputHeroList} type="search" name="searchCard" placeholder="Search a card" />
          </FormGroup>
        </Form>
      </Row>
      <Collapse isOpen={collapse}>
        {isCollapse && (
          <Row>
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 4, offset: 0 }} md={{ size: 3, offset: 1 }}>
              <HeroCard selectedHeroOfList={selectedHeroOfList} />
            </Col>
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 7, offset: 1 }} md={{ size: 7, offset: 1 }}>
              <HeroBiography selectedHeroOfList={selectedHeroOfList} />
            </Col>
          </Row>)}
      </Collapse>


      <Row>
        {heroes.filter(hero => hero.name.toLowerCase().includes(searchInputHeroList.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name)).map(hero => (
          <Col key={hero.id} className="heroFrameAngle my-3" xs="4" md="3" lg="2">
            <HeroListFrame
              toggle={toggle}
              id={hero.id}
              imageHero={hero.image.url}
              nameHero={hero.name}
              heroData={hero}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default HeroesListing;