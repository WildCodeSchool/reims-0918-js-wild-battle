import React from "react";
import { Col, Button } from "reactstrap";
import "./AnimationCountdown.css";

export class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sec: 3,
    };
    this.countdown = this.countdown.bind(this);
    this.calculateCountdown = this.calculateCountdown.bind(this);
    this.stop = this.stop.bind(this);
  }

  countdown() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  calculateCountdown() {
    let diff = this.state.sec;
    if (diff <= 0) return false;
    const timeLeft = {
      sec: 0,
    };
    if (diff > 0) {
      diff -= 1;
    }
    timeLeft.sec = diff;
    if (diff === 0) {
      this.stop();
    }
    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  render() {
    const countDown = this.state;

    return (
      <Col xs={{ size: 2, offset: 5 }}>
        <div>
          {countDown.sec !== 0 && (
            <div>
              <strong
                className={countDown.sec === 2 ? "pulsate2-css" : "pulsate-css"}
              >
                {countDown.sec}
              </strong>
            </div>
          )}
          {countDown.sec === 3 && (
            <Button onClick={this.countdown} className="mt-3">
              Go !
            </Button>
          )}
          {countDown.sec === 0 && <h3>Fight</h3>}
        </div>
      </Col>
    );
  }
}

export default Countdown;
