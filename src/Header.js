import React from "react";
import logo from "./img/logo.svg";
import "./Header.css";

import { Col, Row } from "reactstrap";

const Header = ({ mobileDisplay }) => (
  <header className="container-fluid">
    <Row className={mobileDisplay && "d-xs-none d-sm-none d-md-block"}>
      <Col className="logo" xs="12">
        <img src={logo} className="d-block logo mx-auto" alt="logo" />
      </Col>
    </Row>
  </header>
);

export default Header;
