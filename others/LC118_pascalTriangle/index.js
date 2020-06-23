/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const length = numRows;
  const result = [];
  let row = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i + 1; j++) {
      let value = 0;
      if (!result[i]) result[i] = [];
      if (i > 0) {
        let previous = result[i - 1][j - 1] ? result[i - 1][j - 1] : 0;
        let previous_next = result[i - 1][j] ? result[i - 1][j] : 0;
        result[i].push(previous + previous_next);
      } else {
        result[i].push(1);
      }
    }
  }
  return result;
};

console.log(generate(5));
