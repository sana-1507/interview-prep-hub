function smallestSubarrayWithGivenSum(arr, target) {
    let sum = 0;
    let minLength = Infinity;
    let left = 0;
    for(let right = 0;right < arr.length; right++) {
        sum += arr[right];
        if(sum >= target) {
            while(sum >= target) {
                minLength = Math.min(minLength, right - left + 1);
                sum -= arr[left];
                left++;
            }
                
        }
    }
        return minLength === Infinity ? 0 : minLength;
}
console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 3, 2], 7)) // 2