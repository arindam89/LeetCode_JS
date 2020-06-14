function canJump(nums) {
  let reachMap = [];

  for (let i = 0; i < nums.length; i++) {
    const maxSpeed = nums[i];
    reachMap[i] = [];
    for (let j = 0; j < maxSpeed; j++) {
      if (i + j + 1 < nums.length) {
        reachMap[i].push(i + j + 1);
      }
    }
  }

  let index = 0;
  let reachability = [];
  let que = [];
  reachability.push(0);
  que.push(0);
  while (que.length > 0) {
    index = que.pop();
    if (index === nums.length - 1) return true;
    const reachList = reachMap[index];
    for (let i = 0; i < reachList.length; i++) {
      const nextIndex = reachList[i];
      if (nextIndex === nums.length - 1) return true;
      if (reachability.indexOf(nextIndex) == -1) {
        reachability.push(nextIndex);
        que.push(...reachMap[nextIndex]);
      }
    }
  }

  return false;
}

module.exports = canJump;
