import React from "react";
import classNames from "classnames";
import { Col, Button } from "reactstrap";

export class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sec: 3,
    };
    this.countdown = this.countdown.bind(this);
    this.calculateCountdown = this.calculateCountdown.bind(this);
    this.stop = this.stop.bind(this);
    this.addLeadingZeros = this.addLeadingZeros.bind(this);
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

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <Col xs={{ size: 2, offset: 5 }}>
        <div>
          {countDown.sec !== 0 && (
            <div className={classNames("neal-countdown", this.props.className)}>
              <strong className="countdown-col-element-number">
                {this.addLeadingZeros(countDown.sec)}
              </strong>
              <span className="countdown-col-element-text ml-1">Sec</span>
              {countDown.sec === 3 && (
                <Button onClick={this.countdown} className="ml-3">
                  Go !
                </Button>
              )}
            </div>
          )}
          {countDown.sec === 0 && <h3>Fight</h3>}
        </div>
      </Col>
    );
  }
}

export default Countdown;
