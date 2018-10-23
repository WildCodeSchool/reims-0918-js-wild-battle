import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Collapse,
} from "reactstrap";
import HeroListFrame from "./HeroListFrame";
import HeroCard from "../HeroCard";
import HeroBiography from "./HeroBiography";
import "./HeroesListing.css";
import BattleContext from "../battle_context/BattleContext";
import { Link } from "react-router-dom";

const HeroesListing = () => (
  <BattleContext.Consumer>
    {(siteContext) => (
      <section id="heroesListSection">
        <Container fluid>
          <Row>
            <Col xs="12">
              <Link to="/">
                <Button className="mt-3 button-style">Back</Button>
              </Link>
            </Col>
            <h2 className="mr-3">Heroes List</h2>

            <Form className="ml-auto">
              <FormGroup>
                <Input
                  onChange={(event) =>
                    siteContext.handleSearchListChange(event)
                  }
                  value={siteContext.state.searchInputHeroList}
                  type="search"
                  name="searchCard"
                  placeholder="Search a card"
                />
              </FormGroup>
            </Form>
          </Row>
          <Collapse isOpen={siteContext.state.collapse}>
            {siteContext.state.isCollapse && (
              <Row>
                <Col
                  xs={{ size: 12, offset: 0 }}
                  sm={{ size: 4, offset: 0 }}
                  md={{ size: 3, offset: 1 }}
                  className="mt-5"
                >
                  <HeroCard
                    selectedHeroOfList={siteContext.state.selectedHeroOfList}
                  />
                </Col>
                <Col
                  xs={{ size: 12, offset: 0 }}
                  sm={{ size: 7, offset: 1 }}
                  md={{ size: 7, offset: 1 }}
                >
                  <HeroBiography
                    selectedHeroOfList={siteContext.state.selectedHeroOfList}
                  />
                </Col>
              </Row>
            )}
          </Collapse>

          <Row>
            {siteContext.state.battle.heroes
              .filter((hero) =>
                hero.name
                  .toLowerCase()
                  .includes(siteContext.state.searchInputHeroList.toLowerCase())
              )
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((hero) => (
                <Col
                  key={hero.id}
                  className="heroFrameAngle my-3"
                  xs="4"
                  md="3"
                  lg="2"
                >
                  <HeroListFrame
                    heroeId={hero.id}
                    imageHero={hero.image.url}
                    nameHero={hero.name}
                    heroData={hero}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    )}
  </BattleContext.Consumer>
);

export default HeroesListing;
