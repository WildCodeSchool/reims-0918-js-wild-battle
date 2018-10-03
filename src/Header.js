import React from "react";
import logo from "./img/logo.png";
import "./Header.css";

import { Col, Row } from "reactstrap";

const Header = () => (
  <header>
    <Row>
      <Col xs={{ size: 4, offset: 4 }}>
        <img src={logo} className="d-block logo mx-auto" alt="logo" />
      </Col>
    </Row>
  </header>
);

export default Header;
