import getRandomNumber from "./getRandomNumber";

const isSimilar = (prevRandom, newRandom) =>
  prevRandom !== newRandom
    ? newRandom
    : this.isSimilar(
        prevRandom,
        getRandomNumber(this.state.battle.stats.length)
      );

export default isSimilar;
