import React, { Component } from "react";
import { Col, Input } from "reactstrap";

class ChoiceNickname extends Component {
  render() {
    const {
      result,
      handleChangeNickname,
      name,
      submitCheck,
      isChecked
    } = this.props;
    const moreThreeCharacters = result.length > 2;
    return (
      <Col xs={{ size: 4, offset: 1 }} className="my-auto">
        <h3>
          {name}: {result}
        </h3>
        {!isChecked && (
          <div className="d-flex">
            <Input
              type="text"
              name={name}
              placeholder="Enter Your Nickname"
              className="mr-2"
              onChange={event => handleChangeNickname(event, name)}
              value={result}
            />
            {moreThreeCharacters && (
              <span onClick={() => submitCheck(name)}>
                <i className="far fa-check-circle fa-2x btnNickname" />
              </span>
            )}
          </div>
        )}
      </Col>
    );
  }
}

export default ChoiceNickname;
