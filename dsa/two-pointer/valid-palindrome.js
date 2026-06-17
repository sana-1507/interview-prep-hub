//Check if supplied string is a valid palindrome
function checkValidPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(checkValidPalindrome("racecar"))

