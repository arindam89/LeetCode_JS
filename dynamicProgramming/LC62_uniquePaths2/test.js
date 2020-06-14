const uniquePathsWithObstacles = require("./index");

test(`Example Grid
  Input: [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ],
  Output: 2`, () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  ).toEqual(2);
});

test(`Example Grid
  Input: [
    [1,0],
  ],
  Output: 0`, () => {
  expect(uniquePathsWithObstacles([[1, 0]])).toEqual(0);
});

test(`Example Grid
  Input: [
    [1],
  ],
  Output: 0`, () => {
  expect(uniquePathsWithObstacles([[1]])).toEqual(0);
});

test(`Example Grid
  Input: [[0,0],[1,0]]
  Output: 1`, () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0],
      [1, 0],
    ])
  ).toEqual(1);
});

test(`Example Grid
  Input: [[0,0],[1,1],[0,0]]
  Output: 1`, () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0],
      [1, 1],
      [0, 0],
    ])
  ).toEqual(0);
});
