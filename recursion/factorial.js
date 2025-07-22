// classic

function factorial(n) {
  let result = 1;

  for (let i = 2; i < n + 1; i++) {
    result *= i;
  }

  return result;
}

function factorial_recursive(n) {
  if (n == 0 || n == 1) return 1;

  return n * factorial_recursive(n - 1);
}

console.log(factorial_recursive(3));
