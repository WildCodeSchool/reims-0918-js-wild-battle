import React from "react";

import { Row, Col, Button, Container } from "reactstrap";
import RankingTable from "./RankingTable";
import HistoricTable from "./HistoricTable";
import { Link } from "react-router-dom";

const StatsSection = () => (
  <Container fluid id="statsSection">
    <Row>
      <Col xs="12 pl-5">
        <Link to="/">
          <Button className="button-style mt-3 ml-5">Back</Button>
        </Link>
      </Col>
      <Col sm={{ size: 4, offset: 1 }}>
        <RankingTable />
      </Col>
      <Col sm={{ size: 4, offset: 2 }}>
        <HistoricTable />
      </Col>
    </Row>
  </Container>
);

export default StatsSection;
