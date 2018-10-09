import React, { Component } from "react";
import { Col, Input } from "reactstrap";

class ChoiceNickname extends Component {
  render() {
    const { id, result, handleChangeNickname, name, submitCheck } = this.props;
    return (
      <Col xs={{ size: 4, offset: 1 }} className="my-auto">
        <h3>
          {name}: {result}
        </h3>
        <div className="d-flex">
          <Input
            type="text"
            name={"nickname_" + id}
            id={id}
            placeholder="Enter Your Nickname"
            className="mr-2"
            onChange={handleChangeNickname}
            value={result}
          />
          <span
            className={result.length > 2 ? "d-inline" : "d-none"}
            onClick={() => submitCheck(id)}
          >
            <i className="far fa-check-circle fa-2x btnNickname" />
          </span>
        </div>
      </Col>
    );
  }
}

export default ChoiceNickname;
