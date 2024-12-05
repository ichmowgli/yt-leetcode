/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (!isAlphanumeric(s[left])) {
      left++;
    }

    while (!isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

function isAlphanumeric(char) {
  return (
    (char >= "A" && char <= "Z") ||
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  );
}

// Complexity Analysis:
// Time Complexity: O(n)
// Space Complexity: O(1)
