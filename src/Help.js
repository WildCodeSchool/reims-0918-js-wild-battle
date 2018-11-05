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
                <i class="fas fa-arrow-circle-left" /> Back to Home
              </Link>
            </Col>
            <Col className="p-0" xs={{ size: 8 }}>
              <p>
                The Wild Battle is a WebApp programmed in React. You can play
                with your favourite Hero in a "Card Game". It's a turn by turn
                game and for each round you have to pick a card. Your choice
                must take into account the "Random Stat". Indeed at the
                beginning of a round, a stat is drawn by lot to determined with
                which stat heroes will fight. For instance, if the Strength is
                choosen, and if your card have a better strength stat than your
                opponent's, you win the round, and the best of the five rounds,
                you win the match.
              </p>
              <ul>
                <li>
                  <h3>
                    <span>1</span>
                    Start a Battle
                  </h3>
                  <p>
                    Each player will fill in an input with his nickname. This
                    nickname need to have at least three characters.
                  </p>
                  <p>
                    When the two players' nicknames are checked, the fight can
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
                    The player who doesn't play must not look at the screen.
                  </p>
                  <p>
                    The current player press the "Ready button" when he's ready.
                  </p>
                </li>
                <li>
                  <h3>
                    <span>3</span>
                    Battle Phase
                  </h3>
                  <p>
                    The deck of each player is generated at the first round. The
                    two players receive six random hero cards with four stats :{" "}
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
                    Each round, a "Stat" is generated, that will influenced the
                    card's choice of the players. Maybe the best card he
                    has....or a weaker card to not sacrifice a good option for
                    the next rounds.
                  </p>
                </li>
                <li>
                  <h3>
                    <span>4</span>
                    Final Score
                  </h3>
                  <p>
                    After five rounds the Battle ends and the winner is
                    determined. The result is saved and the ranking refreshed
                    with the new datas.
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
