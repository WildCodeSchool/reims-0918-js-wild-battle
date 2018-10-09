import React from "react";

import { Form, FormGroup, Button } from "reactstrap";

const BattleScreen = ({ round, whoPlayedRound, finishRoom, currentPlayer } ) => (
  <div>
    <h3>Round: {round}</h3>

    <Form>
      <h3>{whoPlayedRound}</h3>
      <FormGroup className="d-flex">
        {/* <Input type="text" className="mr-2" /> */}
        <Button onClick={() => finishRoom({currentPlayer})}>Finish</Button>
      </FormGroup>
    </Form>
  </div>
);

export default BattleScreen;
