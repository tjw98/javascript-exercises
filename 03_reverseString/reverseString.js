const reverseString = function(string) {
  const chars = [];
  const reverseChars = [];

  for (let i = 0; i < string.length; i++) {
    chars[i] = string[i];
  }

  for (let i = 0; i < string.length; i++) {
    reverseChars[i] = chars.pop();
  }

  return reverseChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
