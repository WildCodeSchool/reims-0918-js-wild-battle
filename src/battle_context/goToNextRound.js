import getRandomNumber from "./getRandomNumber";

const goToNextRound = prevState => {
  return {
    battle: {
      ...prevState.battle,
      round: {
        ...prevState.battle.round,
        roundFinished: false,
        roundNumber: prevState.battle.round.roundNumber + 1,
        currentPlayer: "player_1",
        roundWinner: 0,
        randomStat: getRandomNumber(prevState.battle.stats.length)
      }
    }
  };
};

export default goToNextRound;
