function longestPalindrome(s) {
  let start = 0;
  let maxLength = 1;

  function expandMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const length = right - left + 1;
      if (length > maxLength) {
        start = left;
        maxLength = length;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandMiddle(i - 1, i + 1);
    expandMiddle(i, i + 1);
  }

  return s.slice(start, start + maxLength);
}

module.exports = longestPalindrome;
