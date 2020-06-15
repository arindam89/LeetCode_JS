const findMedianSortedArrays = require("./index");

test("Example 1", () => {
  let nums1 = [1, 3];
  let nums2 = [2];
  const result = 2.0;
  expect(findMedianSortedArrays(nums1, nums2)).toEqual(result);
});
