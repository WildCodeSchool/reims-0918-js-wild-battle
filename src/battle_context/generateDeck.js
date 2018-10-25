import getRandomNumber from "./getRandomNumber";

const generateDeck = (prevState, sizeDeck) => {
  let oneCard = 0;
  const deck = [];
  for (let i = sizeDeck; i > 0; i--) {
    const randomN = getRandomNumber(prevState.battle.heroes.length);
    oneCard = prevState.battle.heroes[randomN];
    if (deck.indexOf(oneCard) === -1) {
      deck.push(oneCard);
    } else {
      i++;
    }
  }

  return deck;
};

export default generateDeck;
