const removeFromArray = function(array, ...removeArgs) {
  for (let arg of removeArgs){
    while (array.includes(arg)) {
      if (array.includes(arg)) {
        index = array.indexOf(arg);
        array.splice(index, 1);
      }
    }
  }
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
