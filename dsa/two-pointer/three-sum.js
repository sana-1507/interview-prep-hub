//Find all triplets whose sum is 0
//[-1,0,1,2,-1,-4]
function threeSum(nums) {
    nums = nums.sort((a,b) => a-b)


  let result = [];
  for(let i = 0; i < nums.length-2;i++){
      let left = i + 1;
  let right = nums.length - 1;
  if (i > 0 && nums[i] === nums[i - 1]) {
    continue;
}
  while (left < right) {
    let sum = nums[i] + nums[left] + nums[right];
    if (sum < 0) {
    left++;
    } else if (sum > 0) {
      right--;
    } else {
      result.push([nums[i], nums[left], nums[right]]);
      left++;
      right--
    }
  }
  }
  return result;
}
console.log(threeSum([-1,0,1,2,-1,-4]))