/**
 * 55. Jump Game
 * =============
 *
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 *
 * Example 1:
 *     Input: nums = [2,3,1,1,4]
 *     Output: true
 *     Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 *
 * @param {Array} obstacleGrid This is the obstacle grid.
 */

function uniquePathsWithObstacles(obstacleGrid) {
  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;
  init(obstacleGrid, m, n);
  if (obstacleGrid[n - 1][m - 1] == -1 || obstacleGrid[0][0] == -1) return 0;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] == -1) continue;
      let rowPaths = obstacleGrid[i - 1][j] == -1 ? 0 : obstacleGrid[i - 1][j];
      let colPaths = obstacleGrid[i][j - 1] == -1 ? 0 : obstacleGrid[i][j - 1];
      console.log(
        `For position i,j rowPaths ${rowPaths} and colPaths ${colPaths}`
      );
      obstacleGrid[i][j] = rowPaths + colPaths;
    }
  }
  return obstacleGrid[n - 1][m - 1] < 0 ? 0 : obstacleGrid[n - 1][m - 1];
}

function flip(grid, m, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      grid[i][j] = grid[i][j] == 1 ? -1 : grid[i][j];
    }
  }
}

function init(grid, m, n) {
  flip(grid, m, n);
  for (let i = 0; i < n; i++) {
    if (grid[i][0] == 0) grid[i][0] = 1;
    if (grid[i][0] == -1) break;
  }
  for (let i = 0; i < m; i++) {
    if (grid[0][i] == 0) grid[0][i] = 1;
    if (grid[0][i] == -1) break;
  }
  return grid;
}

module.exports = uniquePathsWithObstacles;
