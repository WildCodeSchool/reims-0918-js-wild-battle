import getRandomNumber from "./getRandomNumber";
import isSimilar from "./isSimilar";

const changeStatForFight = (prevState) => {
  const randomNumber = getRandomNumber(prevState.battle.stats.length);
  const drawNewStat = isSimilar(
    prevState.battle.round.randomStat,
    randomNumber,
    prevState
  );

  return {
    battle: {
      ...prevState.battle,
      round: {
        ...prevState.battle.round,
        roundWinner: 0,
        randomStat: drawNewStat,
      },
    },
  };
};

export default changeStatForFight;
