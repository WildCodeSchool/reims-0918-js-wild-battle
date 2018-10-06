import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Input, Collapse } from "reactstrap";
import HeroListFrame from "./HeroListFrame";
import HeroCard from "../HeroCard";
import HeroBiography from "./HeroBiography";

const heroesDB = [
  {
    id: "1",
    nameHero: "Batman",
    imageHero: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
    str: "26",
    wise: "100",
    speed: "27",
    durability: "50"
  },
  {
    id: "2",
    nameHero: "Captain America",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg?t=1476623431",
    str: "20",
    wise: "85",
    speed: "40",
    durability: "55"
  },
  {
    id: "3",
    nameHero: "DeadPool",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/835.jpg?t=1454090326",
    str: "35",
    wise: "85",
    speed: "50",
    durability: "100"
  },
  {
    id: "4",
    nameHero: "Spooder-Man",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg?t=1476386123",
    str: "55",
    wise: "100",
    speed: "70",
    durability: "75"
  },
  {
    id: "5",
    nameHero: "Superman",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg?t=1492625895",
    str: "100",
    wise: "100",
    speed: "100",
    durability: "100"
  },
  {
    id: "6",
    nameHero: "Wolverine",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/161.jpg?t=1490454246",
    str: "35",
    wise: "85",
    speed: "50",
    durability: "100"
  },
  {
    id: "1",
    nameHero: "Batman",
    imageHero: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
    str: "26",
    wise: "100",
    speed: "27",
    durability: "50"
  },
  {
    id: "2",
    nameHero: "Captain America",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg?t=1476623431",
    str: "20",
    wise: "85",
    speed: "40",
    durability: "55"
  },
  {
    id: "3",
    nameHero: "DeadPool",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/835.jpg?t=1454090326",
    str: "35",
    wise: "85",
    speed: "50",
    durability: "100"
  },
  {
    id: "4",
    nameHero: "Spooder-Man",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg?t=1476386123",
    str: "55",
    wise: "100",
    speed: "70",
    durability: "75"
  },
  {
    id: "5",
    nameHero: "Superman",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg?t=1492625895",
    str: "100",
    wise: "100",
    speed: "100",
    durability: "100"
  },
  {
    id: "6",
    nameHero: "Wolverine",
    imageHero:
      "https://www.superherodb.com/pictures2/portraits/10/100/161.jpg?t=1490454246",
    str: "35",
    wise: "85",
    speed: "50",
    durability: "100"
  }
];

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
          {heroesDB.map(hero => (
            <Col onClick={this.toggle} className="my-3" xs="4" md="3" lg="2">
              <HeroListFrame
                id={hero.id}
                imageHero={hero.imageHero}
                nameHero={hero.nameHero}
              />
            </Col>
          ))}
        </Row>
      </section>
    );
  }
}

export default HeroesListing;
