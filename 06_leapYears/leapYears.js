const leapYears = function (year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
};

// RULES
// leap years are divisible by 4 (1984, 2004 GOOD)
// years divisible by 100 are not leap years (1800, 1900 BAD)
// years divisible by 400 are tho (1600, 2000 GOOD)

// Do not edit below this line
module.exports = leapYears;
