// Implementation by sliding window protocol.
function lengthOfLongestSubstring(s) {
  let startWindow = 0;
  let startMap = {};
  let maxWindow = 0;
  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];
    if (startMap[endChar] != undefined && startMap[endChar] >= startWindow) {
      startWindow = startMap[endChar] + 1;
    }
    startMap[endChar] = i;
    maxWindow = Math.max(maxWindow, i - startWindow + 1);
  }
  return maxWindow;
}

module.exports = lengthOfLongestSubstring;
