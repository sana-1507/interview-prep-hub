//Container With Most Water
function containerWithMostWater(arr) {
  let left = 0;
  let maxArea = 0;
  let right = arr.length - 1;
    while(left < right) {
  let width = right-left;
    let area = Math.min(arr[left],arr[right])*width;
    maxArea = Math.max(area,maxArea)

    if(arr[left] < arr[right])
    left++
  else
    right--;
  }
  
  return maxArea
  
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))