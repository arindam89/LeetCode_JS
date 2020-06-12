// This is an exclusive problem only available in the Deluxe version of this course.
// To learn more, visit https://kaeducation.com/lc-js.html

function isValid(s) {
  let stack = [];
  let top = 0;
  let open_chars = ["(", "[", "{"];
  let close_chars = [")", "]", "}"];
  if (s.length === 1) return false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const open_index = open_chars.indexOf(char);
    if (open_index != -1) {
      stack.push(char);
    } else {
      const topElement = stack[stack.length - 1];
      if (open_chars.indexOf(topElement) === close_chars.indexOf(char)) {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

module.exports = isValid;
