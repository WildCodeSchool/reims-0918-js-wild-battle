const createRankingObject = history => {
  let rankingObject = {};
  for (let i = 0; i < history.length; i++) {
    if (rankingObject[history[i].winner] === undefined) {
      rankingObject[history[i].winner] = { win: 1, lose: 0 };
    } else {
      rankingObject[history[i].winner].win += 1;
    }
    if (rankingObject[history[i].loser] === undefined) {
      rankingObject[history[i].loser] = { win: 0, lose: 1 };
    } else {
      rankingObject[history[i].loser].lose += 1;
    }
  }

  return rankingObject;
};

it("Should return a ranking object", () => {
  const history = [
    { winner: "Fabien", loser: "Florentin" },
    { winner: "Mathieu", loser: "Michael" },
    { winner: "Fabien", loser: "Marion" },
    { winner: "Fabien", loser: "Mathieu" }
  ];
  const expected = {
    Fabien: { win: 3, lose: 0 },
    Marion: { win: 0, lose: 1 },
    Mathieu: { win: 1, lose: 1 },
    Michael: { win: 0, lose: 1 },
    Florentin: { win: 0, lose: 1 }
  };
  expect(createRankingObject(history)).toEqual(expected);
});

const createRankingTable = history => {
  const rankingTable = [];
  const rankingObject = createRankingObject(history);
  Object.keys(rankingObject).map(function(key, index) {
    rankingTable.push({
      name: key,
      win: rankingObject[key].win,
      lose: rankingObject[key].lose
    });
  });
  return rankingTable;
};

it("Should return a ranking table", () => {
  const history = [
    { winner: "Fabien", loser: "Florentin" },
    { winner: "Mathieu", loser: "Michael" },
    { winner: "Fabien", loser: "Marion" },
    { winner: "Fabien", loser: "Mathieu" }
  ];
  const expected = [
    {
      name: "Fabien",
      win: 3,
      lose: 0
    },
    {
      name: "Florentin",
      win: 0,
      lose: 1
    },

    {
      name: "Mathieu",
      win: 1,
      lose: 1
    },
    {
      name: "Michael",
      win: 0,
      lose: 1
    },
    {
      name: "Marion",
      win: 0,
      lose: 1
    }
  ];

  expect(createRankingTable(history)).toEqual(expected);
});
