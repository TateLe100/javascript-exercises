const reverseString = function (string) {
  let split = string.split("");
  let reversedArray = split.reverse();
  let answer = reversedArray.join("");
  return answer;
};

// Do not edit below this line
module.exports = reverseString;
