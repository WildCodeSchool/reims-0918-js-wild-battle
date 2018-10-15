import React, { Fragment } from "react";
import { Col, Input } from "reactstrap";
import "./ChoiceNickname.css";
import BattleContext from "../battle_context/BattleContext";

const ChoiceNickname = ({ name, title }) => (
  <Col xs={{ size: 10 }} md={{ size: 4 }} className="my-auto">
    <BattleContext.Consumer>
      {context => (
        <Fragment>
          <h3
            className={
              context.state.battle[name].nicknameChecked
                ? "nicknameChecked"
                : undefined
            }
          >
            {title}: {context.state.battle[name].nickname}
          </h3>
          {!context.state.battle[name].nicknameChecked && (
            <div className="d-flex">
              <Input
                type="text"
                name={name}
                placeholder="Enter Your Nickname"
                className="mr-2"
                onChange={event => context.handleChangeNickname(event, name)}
                value={context.state.battle[name].nickname}
              />
              {context.state.battle[name].nickname.length > 2 && (
                <span onClick={() => context.submitCheck(name)}>
                  <i className="far fa-check-circle fa-2x btnNickname" />
                </span>
              )}
            </div>
          )}
        </Fragment>
      )}
    </BattleContext.Consumer>
  </Col>
);

export default ChoiceNickname;
