const changeTransitionRound = prevState => ({
  battle: {
    ...prevState.battle,
    round: {
      ...prevState.battle.round,
      transition: !prevState.battle.round.transition
    }
  }
});

export default changeTransitionRound;
