import getRandomNumber from "./getRandomNumber";

const generateDeck = (prevState, sizeDeck) => {
  let oneCard = 0;
  const deck = [];
  const listNumberRandom = [];
  for (let i = sizeDeck; i > 0; i--) {
    const randomN = getRandomNumber(prevState.battle.heroes.length);
    if (!listNumberRandom.includes(randomN)) {
      // check if the card is collector or not to add into the deck
      if (!prevState.battle.heroes[randomN].collector) {
        oneCard = prevState.battle.heroes[randomN];
        listNumberRandom.push(randomN);
        deck.push({ ...oneCard });
      } else {
        i++;
      }
    } else {
      i++;
    }
  } // add two collector cards
  const victor = { ...prevState.battle.heroes.find(id => id.id === 6553) };
  const victoria = { ...prevState.battle.heroes.find(id => id.id === 6554) };
  deck.splice(4, 0, victor).join();
  deck.splice(8, 0, victoria).join();
  return deck;
};

export default generateDeck;
