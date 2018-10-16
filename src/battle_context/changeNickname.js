const changeNickname = (prevState, event, name) => {
  let updateStats = prevState;
  updateStats = {
    ...prevState,
    battle: {
      ...prevState.battle,
      [name]: {
        ...prevState.battle[name],
        nickname: event.target.value.replace(/[ ]/, "")
      }
    }
  };
  return updateStats;
};

export default changeNickname;
