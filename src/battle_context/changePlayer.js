const changePlayer = prevState => {
  return {
    battle: {
      ...prevState.battle,
      round: {
        ...prevState.battle.round,
        currentPlayer:
          prevState.battle.round.currentPlayer === "player_1"
            ? "player_2"
            : "player_1",
        transition: true,
        roundFinished:
          prevState.battle.round.currentPlayer === "player_2"
            ? true
            : prevState.battle.round.roundFinished
      }
    }
  };
};

export default changePlayer;
