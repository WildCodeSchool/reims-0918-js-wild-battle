import getRandomNumber from "./getRandomNumber";

const isSimilar = (prevRandom, newRandom, prevState) =>
  prevRandom !== newRandom
    ? newRandom
    : this.isSimilar(
        prevRandom,
        getRandomNumber(prevState.battle.stats.length)
      );

export default isSimilar;
