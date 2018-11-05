const hasWonRound = (statHeroPlayer1, statHeroPlayer2, prevState) => {
  let updatedState = prevState.battle;
  if (statHeroPlayer1 - statHeroPlayer2 === 0) {
    updatedState.round.roundWinner = 3;
  } else {
    if (statHeroPlayer1 - statHeroPlayer2 > 0) {
      updatedState.round.roundWinner = 1;
      updatedState.player_1.score++;
    } else {
      updatedState.round.roundWinner = 2;
      updatedState.player_2.score++;
    }
  }
  return updatedState;
};

export default hasWonRound;
