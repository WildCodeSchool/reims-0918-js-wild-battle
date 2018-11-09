import getRandomNumber from "./getRandomNumber";

const setRandomStatRound = prevState => {
  return {
    battle: {
      ...prevState.battle,
      round: {
        ...prevState.battle.round,
        randomStat: getRandomNumber(prevState.battle.stats.length)
      }
    }
  };
};

export default setRandomStatRound;
