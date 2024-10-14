const leapYears = function(year) {
  // returns true if leap year
  if (year % 4 == 0 && year % 100 != 0 ||year % 400 == 0) return true;
  return false;
};

// Do not edit below this line
module.exports = leapYears;
