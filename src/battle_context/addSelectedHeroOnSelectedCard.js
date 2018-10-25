const addSelectedHeroOnSelectedCard = (prevState, idHeroSelected) => {
  const deck = prevState.battle[prevState.battle.round.currentPlayer].deck.map(
    hero => {
      if (hero.id === idHeroSelected) {
        hero.used = true;
      }
      return hero;
    }
  );
  return {
    battle: {
      ...prevState.battle,
      [prevState.battle.round.currentPlayer]: {
        ...prevState.battle[prevState.battle.round.currentPlayer],
        deck,

        selectedCard: prevState.battle[
          prevState.battle.round.currentPlayer
        ].deck.filter(hero => hero.id === idHeroSelected)
      }
    }
  };
};
export default addSelectedHeroOnSelectedCard;
