import React from "react";
import "./Footer.css";

import { Col, Row } from "reactstrap";

const Footer = () => (
  <footer>
    <Row>
      <Col xs={{ size: 4, offset: 1 }}>
        <a href="#" className="d-block">
          <i className="fab fa-facebook" />
        </a>
        <a href="#" className="d-block">
          <i className="fab fa-twitter-square" />
        </a>
      </Col>
      <Col xs={{ size: 4, offset: 4 }} />
    </Row>
  </footer>
);

export default Footer;
