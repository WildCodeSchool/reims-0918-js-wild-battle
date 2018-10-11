import React from "react";
import { Container, Row, Col, Form, FormGroup, Input, Collapse } from "reactstrap";
import HeroListFrame from "./HeroListFrame";
import HeroCard from "../HeroCard";
import HeroBiography from "./HeroBiography";
import "./HeroesListing.css"

const HeroesListing = ({ heroes, collapse, toggle, selectedHeroOfList }) => (
    <section id="heroesListSection">
        <Container fluid>
            <Row>
                <h2 className="mr-3">Heroes List</h2>
                <Form>
                    <FormGroup>
                        <Input type="search" name="searchCard" placeholder="Search a card" />
                    </FormGroup>
                </Form>
            </Row>
            {collapse && (
                <Collapse isOpen={collapse}>
                    <Row>
                        <Col sm="12" md={{ size: 3, offset: 2 }}>
                            <HeroCard selectedHeroOfList={selectedHeroOfList} />
                        </Col>
                        <Col sm="12" md={{ size: 6, offset: 1 }}>
                            <HeroBiography selectedHeroOfList={selectedHeroOfList} />
                        </Col>
                    </Row>
                </Collapse>


            )}
            <Row>
                {heroes.sort((a, b) => a.name.localeCompare(b.name)).map(hero => (
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