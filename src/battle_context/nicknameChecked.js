const changeNickname = (prevState, name) => {
  let updateStats = prevState;
  updateStats = {
    ...prevState,
    battle: {
      ...prevState.battle,
      [name]: {
        ...prevState.battle[name],
        nicknameChecked: true
      }
    }
  };
  return updateStats;
};

export default changeNickname;
