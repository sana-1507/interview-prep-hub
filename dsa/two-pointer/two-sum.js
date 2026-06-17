//Two sum sorted array
function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        const sum = arr[left] + arr[right];
        if(sum > target) {
            right--;
        }else if(sum < target) {
            left++;
        }
        else if(sum === target) {
            return [left, right];
        }
    }
    return -1;
}

console.log(twoSum([2,4,7,8,9], 12))