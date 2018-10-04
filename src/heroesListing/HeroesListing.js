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
          <h2>Heroes's List</h2>
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
              <HeroCard />
            </Col>
            <Col xs="6">
              <HeroBiography />
            </Col>
          </Row>
        </Collapse>
        <Row>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame />
          </Col>
          <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
            <HeroListFrame />
          </Col>
        </Row>
      </section>
    );
  }
}

export default HeroesListing;
