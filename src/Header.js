import React from "react";
import logo from "./img/logo.svg";
import "./Header.css";

import { Col, Row } from "reactstrap";

const Header = () => (
  <header className="container-fluid">
    <Row>
      <Col className="logo" xs={{ size: 4, offset: 4 }}>
        <img src={logo} className="d-block logo mx-auto" alt="logo" />
      </Col>
    </Row>
  </header>
);

export default Header;
