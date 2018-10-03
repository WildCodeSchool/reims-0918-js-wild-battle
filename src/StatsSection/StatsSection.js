import React from "react";

import { Row, Col } from "reactstrap";
import RankingTable from "./RankingTable";
import HistoricTable from "./HistoricTable";

const StatsSection = () => (
  <div>
    <Row>
      <Col sm={{ size: 4, offset: 1 }}>
        <RankingTable />
      </Col>
      <Col sm={{ size: 4, offset: 2 }}>
        <HistoricTable />
      </Col>
    </Row>
  </div>
);

export default StatsSection;
