const sumAll = function(n1, n2) {
  // checks arguments are positive integers
  if (n1 < 0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2)) {
    return "ERROR";
  }

  let bigger = n1 > n2 ? n1 : n2;
  let smaller = n1 > n2 ? n2 : n1; 
  let sum = smaller;

  for (let i = smaller + 1; i < bigger + 1; i++) {
    sum+= i;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
