import React from "react";
import { Row, Col } from "reactstrap";
import { Spring } from "react-spring";
import { Link } from "react-router-dom";

const Help = () => (
  <div className="help-section">
    <Spring
      from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
      to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
      config={{ delay: 50 }}
    >
      {props => (
        <div style={props}>
          <Row className="d-flex justify-content-center">
            <Col
              className="align-right justify-content-end mb-2 pl-0 pb-4"
              style={{ borderBottom: "1px solid #fff" }}
              xs={{ size: "8" }}
            >
              <Link
                style={{
                  fontSize: "20px",
                  textDecoration: "none"
                }}
                className="text-light border p-2 rounded"
                to="/"
              >
                <i className="fas fa-info-circle" /> Back to Home
              </Link>
            </Col>
            <Col className="p-0" xs={{ size: 8 }}>
              <p>
                The Wild Battle is a WebApp programmed in React. You can play
                with your favourite Hero in a "Card Game". It's a turn by turn
                game and for each round you have to pick a card. Your choice
                must take into account the "Random Stat". Indeed at the
                beginning of a round, a stat is draw by lot to determined with
                which stat heroes will fight. For instance, if the Strength is
                choosen, and if your card have a better strength stat than your
                opponent's, you win the round, and after 3 win, you win the
                match.
              </p>
              <ul>
                <li>
                  <h3>
                    <span>1</span>
                    Start a Battle
                  </h3>
                  <p>
                    Each Player will complete an input with his Nickname. This
                    Nickname need to have at least 3 characters.
                  </p>
                  <p>
                    When the 2 Players nicknames are checked, the fight can
                    begin!
                  </p>
                </li>
                <li>
                  <h3>
                    <span>2</span>
                    Transition Phase
                  </h3>
                  <p>
                    At the beginning of each round there will be a transition.
                    The Player who doesn't play must not look a the screen.
                  </p>
                  <p>
                    The Current Player press the "Ready button" when he's ready.
                  </p>
                </li>
                <li>
                  <h3>
                    <span>3</span>
                    Round Conduct
                  </h3>
                  <p>
                    The Deck of each Player is generated at the first round. The
                    two players receive 6 Hero Random Cards with 4 stats. Each
                    round a "Fight Stat" is generated.
                  </p>
                  <p>
                    Each Hero Card have{" "}
                    <span>
                      <i className="fas fa-dumbbell" /> Strength,
                    </span>{" "}
                    <span>
                      <i className="fas fa-bolt" /> Speed
                    </span>
                    ,{" "}
                    <span>
                      <i className="fas fa-book" /> Intelligence and{" "}
                      <span>
                        <i className="fas fa-shield-alt" /> Durability.
                      </span>
                    </span>
                  </p>
                  <p>
                    To win, the player must choice a card regarding the "Fight
                    Stat". Maybe the best card he have....or a less strong to
                    not sacrifice a good option for the next rounds.
                  </p>
                </li>
                <li>
                  <h3>
                    <span>5</span>
                    Final Score
                  </h3>
                  <p>
                    After 5 rounds the Battle end and the winner is determined.
                    The result is saved and the ranking actualized with the new
                    datas.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      )}
    </Spring>
  </div>
);

export default Help;
