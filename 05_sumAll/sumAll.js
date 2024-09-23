const sumAll = function (valOne, valTwo) {
  let answer = 0;
  if (valOne < 0 || valTwo < 0) {
    return "ERROR";
  } else if (!Number.isInteger(valOne) || !Number.isInteger(valTwo)) {
    return "ERROR";
  } else {
    if (valOne < valTwo) {
      for (let i = valOne; i <= valTwo; i++) {
        answer += i;
      }
    } else {
      for (let i = valTwo; i <= valOne; i++) {
        answer += i;
      }
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = sumAll;
