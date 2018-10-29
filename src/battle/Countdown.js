import React from "react";
import { Col } from "reactstrap";
import "./AnimationCountdown.css";
import BattleContext from "../battle_context/BattleContext";

export class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sec: 3
    };
    this.countdown = this.countdown.bind(this);
    this.calculateCountdown = this.calculateCountdown.bind(this);
  }

  countdown() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  calculateCountdown() {
    let diff = this.state.sec;
    const timeLeft = {
      sec: 0
    };
    diff -= 1;
    timeLeft.sec = diff;
    if (diff === 0) {
      this.stop();
    }
    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.countdown();
  }

  render() {
    const countDown = this.state;

    return (
      <Col className="my-auto text-center" xs="12" md="4">
        {countDown.sec > 0 && (
          <div>
            <strong className="pulsate-css FontBangers">{countDown.sec}</strong>
          </div>
        )}
        {countDown.sec === 0 && (
          <BattleContext>
            {battleContext => (
              <h3 className="FontBangers fight">
                <span
                  onClick={() => battleContext.initialisationAndStartCombat()}
                >
                  FIGHT
                </span>
              </h3>
            )}
          </BattleContext>
        )}
      </Col>
    );
  }
}

export default Countdown;
