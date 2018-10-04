import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const HeroListFrame = () => (
  <a id="1" href="#">
    <Card>
      <CardImg
        top
        width="100%"
        src="https://via.placeholder.com/150x150"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>Super Hero Name</CardTitle>
      </CardBody>
    </Card>
  </a>
);

export default HeroListFrame;
