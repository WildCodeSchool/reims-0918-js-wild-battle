import React, { Component } from "react";

import { Row, Col, Button, Container } from "reactstrap";
import RankingTable from "./RankingTable";
import HistoricTable from "./HistoricTable";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

class StatsSection extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container fluid id="statsSection">
        <Header />
        <Row>
          <Col xs="12 pl-5">
            <Link to="/">
              <Button className="button-style mt-3">Back</Button>
            </Link>
          </Col>
          <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 1 }}>
            <RankingTable />
          </Col>
          <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 2 }}>
            <HistoricTable />
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default StatsSection;
