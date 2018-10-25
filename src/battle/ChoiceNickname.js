import React, { Fragment } from "react";
import { Col, Input } from "reactstrap";
import "./ChoiceNickname.css";
import BattleContext from "../battle_context/BattleContext";

const ChoiceNickname = ({ name, title }) => (
  <Col xs={{ size: 10 }} md={{ size: 3 }} className="my-auto">
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
            <div>
              <div className="d-flex">
                <Input
                  type="text"
                  name={name}
                  placeholder="Enter Your Nickname"
                  className="mr-2"
                  onChange={event => context.handleChangeNickname(event, name)}
                  onKeyPress={event =>
                    context.onPressEnterNicknameChecked(
                      event,
                      name,
                      context.state.battle[name].nickname.length
                    )
                  }
                  value={context.state.battle[name].nickname}
                />
                {context.state.battle[name].nickname.length > 2 && (
                  <span onClick={() => context.submitCheck(name)}>
                    <i className="far fa-check-circle fa-2x btnNickname" />
                  </span>
                )}
              </div>
              {0 < context.state.battle[name].nickname.length ? (
                context.state.battle[name].nickname.length < 3 ? (
                  <div className="text-danger">
                    Your nickname must have at least 3 characters
                  </div>
                ) : (
                  <div className="text-success">Your nickname is valid</div>
                )
              ) : (
                <div>&nbsp;</div>
              )}
            </div>
          )}
        </Fragment>
      )}
    </BattleContext.Consumer>
  </Col>
);

export default ChoiceNickname;
