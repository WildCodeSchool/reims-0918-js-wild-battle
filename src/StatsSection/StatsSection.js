import React from "react";

import { Row, Col } from "reactstrap";
import RankingTable from "./RankingTable";
import HistoricTable from "./HistoricTable";

const StatsSection = () => (
  <div>
    <Row>
      <Col sm="4">
        <RankingTable />
      </Col>
      <Col sm={{ size: 4, offset: 4 }}>
        <HistoricTable />
      </Col>
    </Row>
  </div>
);

export default StatsSection;
