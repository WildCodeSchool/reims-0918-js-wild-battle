import React, { Component } from "react";

import { Form, FormGroup, Button } from "reactstrap";

class BattleScreen extends Component {
  render() {
    const { round, finishRoom } = this.props
    return (
      <div>
        {round.roundNumber < 6 ? (
          <div>
            <h3>Round: {round.roundNumber}</h3>
            <Form>
              <h3>Current player : {round.currentPlayer}</h3>
              <FormGroup className="d-flex">
                <Button onClick={() => finishRoom(round.currentPlayer)}>
                  Finish
                </Button>
              </FormGroup>
            </Form>
          </div>
        ) : (
          <h3>Battle Finish</h3>
        )}
      </div>
    );
  }
}
export default BattleScreen;
