const changeTransitionRound = prevState => ({
  battle: {
    ...prevState.battle,
    round: {
      ...prevState.battle.round,
      isCardSelected: 0,
      transition: !prevState.battle.round.transition
    }
  }
});

export default changeTransitionRound;
