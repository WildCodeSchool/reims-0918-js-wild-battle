import { createRankingObject, createRankingTable } from "./RankingTable";

it("Should return a ranking object", () => {
  const history = [
    {
      "winner": {
        "nickname": "Fabien",
        "score": 3
      },
      "loser": {
        "nickname": "Florentin",
        "score": 2
      },
      "date": "10/15/2018"
    },
    {
      "winner": {
        "nickname": "Mathieu",
        "score": 3
      },
      "loser": {
        "nickname": "Michaël",
        "score": 2
      },
      "date": "10/16/2018"
    }
  ]
  const expected = {
    Fabien: { win: 1, lose: 0 },
    Mathieu: { win: 1, lose: 0 },
    Michaël: { win: 0, lose: 1 },
    Florentin: { win: 0, lose: 1 }
  };
  expect(createRankingObject(history)).toEqual(expected);
});

it("Should return a ranking table", () => {
  const history = [
    {
      "winner": {
        "nickname": "Fabien",
        "score": 3
      },
      "loser": {
        "nickname": "Florentin",
        "score": 2
      },
      "date": "10/15/2018"
    },
    {
      "winner": {
        "nickname": "Mathieu",
        "score": 3
      },
      "loser": {
        "nickname": "Michaël",
        "score": 2
      },
      "date": "10/16/2018"
    }
  ]
  const expected = [
    {
      name: "Fabien",
      win: 1,
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
      lose: 0
    },
    {
      name: "Michaël",
      win: 0,
      lose: 1
    }
  ];

  expect(createRankingTable(history)).toEqual(expected);
});