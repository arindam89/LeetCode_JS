function canJump(nums) {
  let reachability = new Array(nums.length).fill(false);
  reachability[0] = true;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const maxSpeed = nums[j];
      // We can reach all places from this
      if (reachability[j] && j + maxSpeed >= i) {
        reachability[i] = true;
        break;
      }
    }
  }

  return reachability[nums.length - 1];
}

module.exports = canJump;
