const fibonacci = function(n) {
  Number(n);

  if (n < 0) return "OOPS"
  if (n == 0) return 0
  let f1 = 1;
  let f2 = 1;
  let f3 = f1 + f2;
  const fibArray = [f1, f2];

  for (let i = n; i > 0; i--) {
    fibArray.push(f3);
    f1 = f2;
    f2 = f3;
    f3 = f2 + f1;
  }
  return fibArray[n - 1]
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
