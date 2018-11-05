const changeNickname = (prevState, event, name) => {
  let updateStats = prevState;
  let nicknameVerify =
    event.target.value > 0
      ? event.target.value
          .match(/[\w]/g)
          .join("")
          .replace(/[_]+/g, "_")
      : event.target.value;

  updateStats = {
    ...prevState,
    battle: {
      ...prevState.battle,
      [name]: {
        ...prevState.battle[name],
        nickname: nicknameVerify
      }
    }
  };

  return updateStats;
};

export default changeNickname;
