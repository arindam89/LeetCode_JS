// This is an exclusive problem only available in the Deluxe version of this course.
// To learn more, visit https://kaeducation.com/lc-js.html

function lengthOfLIS(nums) {
  // 1. If the number of elements less than 1 return length
  if (nums && nums.length <= 1) return nums.length;

  // 2. We create our DP array which holds the best subsequence
  //    Initialize it with 1
  //    Also have i and j which will be used to traverse the array
  //    i -> represents from current index we are looking at the array
  //    j -> represents the end index which we are considering (array length)
  const sub = new Array(nums.length).fill(1);
  let globalMax = 1;

  // 3. Loop through the array with j starts at 1 index all the way
  //    Have a inner loop with i which starts at 0 goes till j
  //    Using the sub array look and update the sequence length
  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      // We found an element from which nums[j]
      // can be a increasing subsequence
      if (nums[j] > nums[i]) {
        // We update sub at j if our current evalutation is better
        // than what we already knew
        sub[j] = Math.max(sub[i] + 1, sub[j]);
        // update the globalMax subsequence as well if needed
        if (sub[j] > globalMax) {
          globalMax = sub[j];
        }
      }
    }
  }
  return globalMax;
}

module.exports = lengthOfLIS;
