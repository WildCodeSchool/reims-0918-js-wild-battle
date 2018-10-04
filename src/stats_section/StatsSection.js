import React from "react";

import { Row, Col, Container } from "reactstrap";
import RankingTable from "./RankingTable";
import HistoricTable from "./HistoricTable";

const StatsSection = () => (
  <Container fluid id="statsSection">
    <Row>
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
