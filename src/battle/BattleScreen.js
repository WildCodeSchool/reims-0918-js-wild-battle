import React from "react";

import { Form, FormGroup, Button } from "reactstrap";

const BattleScreen = ({ round, whoPlayedRound, finishRoom }) => (
  <div>
    <h3>Round: {round}</h3>

    <Form>
      <h3>{whoPlayedRound}</h3>
      <FormGroup className="d-flex">
        {/* <Input type="text" className="mr-2" /> */}
        <Button onClick={() => finishRoom("Finish 1")}>Finish</Button>
      </FormGroup>
    </Form>
  </div>
);

export default BattleScreen;
