
//[1,1,2]
function removeDuplicatesFromSortedArr(nums) {
    let i = 0 ;
    for(let j = 1; j < nums.length;j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]
        }
    }
    nums.fill(0,i+1, nums.length)
    return nums
}

console.log(removeDuplicatesFromSortedArr([1,1,2,3,3]))