const changeNickname = (prevState, event, name) => {
  let updateStats = prevState;
  updateStats = {
    ...prevState,
    battle: {
      ...prevState.battle,
      [name]: {
        ...prevState.battle[name],
        nickname: event.target.value
          .match(/[\w]/g)
          .join("")
          .replace(/[_]+/g, "_")
      }
    }
  };
  return updateStats;
};

export default changeNickname;
