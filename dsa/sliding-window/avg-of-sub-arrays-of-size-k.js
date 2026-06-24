function avgOfSubArraysOfSizeK(k, arr) {
    if(arr.length < k) {
        return 0;
    }
    let left = 0;
    let sum = 0;
    let result = [];
    for(let right = 0; right< arr.length; right++) {
        sum += arr[right];
    if(right >= k-1){
        result.push(sum/k)
        sum -= arr[left];
        left++;
    }
    }
    return result;
}

console.log(avgOfSubArraysOfSizeK(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))