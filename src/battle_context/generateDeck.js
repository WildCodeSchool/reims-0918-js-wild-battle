import getRandomNumber from "./getRandomNumber";

const generateDeck = (prevState, sizeDeck) => {
  let oneCard = 0;
  const deck = [];
  const listNumberRandom = [];
  for (let i = sizeDeck; i > 0; i--) {
    const randomN = getRandomNumber(prevState.battle.heroes.length);
    if (!listNumberRandom.includes(randomN)) {
      oneCard = prevState.battle.heroes[randomN];
      listNumberRandom.push(randomN);
      deck.push({ ...oneCard });
    } else {
      i++;
    }
  }

  return deck;
};

export default generateDeck;
