const repeatString = function(string, n) {
  let newString = "";
  if (n >= 0) {
    for (let i = 0; i < n; i++) {
      newString += string;
    }
    return newString
  } else if (n < 0) {
    return "ERROR"
  }
};

// Do not edit below this line
module.exports = repeatString;
