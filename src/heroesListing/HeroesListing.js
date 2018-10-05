import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Input, Collapse } from "reactstrap";
import HeroListFrame from "./HeroListFrame";
import HeroCard from "../HeroCard";
import HeroBiography from "./HeroBiography";

class HeroesListing extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    };
  }

  toggle(event) {
    this.setState({ collapse: true });
  }

  render() {
    return (
      <section id="heroesListSection">
        <Row>
          <h2>Heroes List</h2>
          <Form>
            <FormGroup>
              <Input
                type="search"
                name="searchCard"
                placeholder="Search a card"
              />
            </FormGroup>
          </Form>
        </Row>
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col xs="6">
              <HeroCard
                nameHero="Batman"
                imageHero="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
                str="26"
                wise="100"
                speed="27"
                durability="50"
              />
            </Col>
            <Col xs="6">
              <HeroBiography />
            </Col>
          </Row>
        </Collapse>
        <Row>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame
              imageHero="https://www.superherodb.com/pictures2/portraits/10/100/835.jpg?t=1454090326"
              nameHero="DeadPool"
            />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame
              imageHero="https://www.superherodb.com/pictures2/portraits/10/100/133.jpg?t=1476386123"
              nameHero="Superman"
            />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame
              imageHero="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg?t=1503058475"
              nameHero="Batman"
            />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame
              imageHero="https://www.superherodb.com/pictures2/portraits/10/100/274.jpg?t=1476623431"
              nameHero="Captain America"
            />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame
              imageHero="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg?t=1492625895"
              nameHero="Superman"
            />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame
              imageHero="https://www.superherodb.com/pictures2/portraits/10/100/1336.jpg?t=1445541108"
              nameHero="Hit-Girl"
            />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame
              imageHero="https://www.superherodb.com/pictures2/portraits/10/100/78.jpg?t=1341043389"
              nameHero="Hercules"
            />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame
              imageHero="https://www.superherodb.com/pictures2/portraits/10/100/83.jpg?t=1490271049"
              nameHero="Hulk"
            />
          </Col>
        </Row>
      </section>
    );
  }
}

export default HeroesListing;
