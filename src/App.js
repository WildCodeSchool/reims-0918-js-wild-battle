import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";

import StatsSection from "./stats_section/StatsSection";
import HeroesListing from "./heroesListing/HeroesListing";
import Header from "./Header";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import UsernameChoice from "./battle/UsernameChoice";
import CombatInit from "./battle/CombatInit";

const listHeroes = [
  30,
  69,
  165,
  207,
  222,
  263,
  310,
  313,
  322,
  341,
  346,
  354,
  514,
  620,
  644
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: []
    };
  }

  callApiSuperHeroes() {
    for (let i = 0; i < listHeroes.length; i++) {
      fetch(`http://superheroapi.com/api.php/2368931693133321/${listHeroes[i]}`)
        .then(results => results.json()) // conversion du résultat en JSON
        .then(data => {
          this.setState({
            heroes: [...this.state.heroes, data]
          });
        });
    }
  }

  componentDidMount() {
    this.callApiSuperHeroes();
  }

  render() {
    return (
      <div>
        <Header />
        <Container fluid>
          <HomeNav />
          <UsernameChoice />
          <HeroesListing />
          <button onClick={() => this.callApiSuperHeroes()}>
            JE GROSSIS LE BOUTON
          </button>
          <StatsSection />
          <CombatInit />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
