import React from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import BattleContext from "./battle_context/BattleContext";

const HeroCard = ({ indexHero, selectedHeroOfList, battle }) => (
  <BattleContext.Consumer>
    {siteContext => (
      <div>
        <Card
          className={
            indexHero !== undefined
              ? !siteContext.state.battle[
                  siteContext.state.battle.round.currentPlayer
                ].deck[indexHero].used
                ? "battleCard p-2 unUsed"
                : "battleCard p-2"
              : "battleCard p-2"
          }
        >
          <CardTitle className="text-center battleCardTitle">
            {selectedHeroOfList.name}
          </CardTitle>

          <CardImg
            top
            width="100%"
            src={selectedHeroOfList.image.url}
            alt="Card image cap"
          />
          {!(battle === "true") ? (
            <CardBody className="pb-0 pt-2 battleCardBody">
              <Row>
                <Col className="text-center responsive-card">
                  <i className="fas fa-dumbbell" />
                  <p className="mb-0">
                    {selectedHeroOfList.powerstats.strength}
                  </p>
                </Col>
                <Col className="text-center responsive-card">
                  <i className="fas fa-bolt" />
                  <p className="mb-0">{selectedHeroOfList.powerstats.speed}</p>
                </Col>
                <Col className="text-center responsive-card">
                  <i className="fas fa-book" />
                  <p className="mb-0">
                    {selectedHeroOfList.powerstats.intelligence}
                  </p>
                </Col>
                <Col className="text-center responsive-card">
                  <i className="fas fa-shield-alt" />
                  <p className="mb-0">
                    {selectedHeroOfList.powerstats.durability}
                  </p>
                </Col>
              </Row>
            </CardBody>
          ) : (
            ""
          )}
        </Card>
      </div>
    )}
  </BattleContext.Consumer>
);

export default HeroCard;
