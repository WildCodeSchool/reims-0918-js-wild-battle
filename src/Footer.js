import React from "react";
import "./Footer.css";

import { Col, Row } from "reactstrap";

const Footer = () => (
  <footer className="mt-5 container-fluid">
    <Row className="">
      <Col className="d-flex justify-content-center">
        <div className="d-flex">
          <a href="https://www.facebook.com/wildcodeschool/" className="d-block mr-2">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://twitter.com/wildschoolreims?lang=fr" className="d-block mr-5">
            <i className="fab fa-twitter-square" />
          </a>
        </div>
        <div>
          <a href="https://wildcodeschool.fr/equipe/" className="mr-2">
            About
          </a>
          <a href="https://odyssey.wildcodeschool.fr/mentions-legales">Legal Mentions</a>
        </div>
      </Col>
    </Row>
  </footer>
);

export default Footer;
