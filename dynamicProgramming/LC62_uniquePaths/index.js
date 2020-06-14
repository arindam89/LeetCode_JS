// This is an exclusive problem only available in the Complete and Deluxe versions of this course.
// To learn more, visit https://kaeducation.com/lc-js.html

// function uniquePaths(m, n) {
//   if (m <= 0 || n <= 0) return 0;
//   if (m == 1 && n == 1) return 1;
//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
// }

function uniquePaths(m, n) {
  let pathMatrix = new Array(n).fill(new Array(m).fill(0));
  pathMatrix[0] = new Array(m).fill(1);
  pathMatrix = pathMatrix.map((arr) => {
    arr[0] = 1;
    return arr;
  });

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      pathMatrix[i][j] = pathMatrix[i - 1][j] + pathMatrix[i][j - 1];
    }
  }
  return pathMatrix[n - 1][m - 1];
}

module.exports = uniquePaths;
