const palindromes = str => {
  const ignoredChars = [".", " ", "!", ","]
  const newStr = str
  .toLowerCase()
  .split("")
  .filter((element) => !ignoredChars.includes(element))
  .join("");

  const reverseStr = newStr.split("").reverse().join("");
  
  return newStr === reverseStr
}
// Do not edit below this line
module.exports = palindromes;
