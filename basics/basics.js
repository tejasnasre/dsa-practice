function p1() {
  //  Check if a Number is Positive or Negative
  let num = 1;

  if (num > 0) console.log("the given num is postive");
  else if (num < 0) console.log("the given num is negative");
  else console.log("the number is zero");

  if (num >= 0) {
    if (num == 0) {
      console.log("the given number is zero");
    } else {
      console.log("the given number is postive");
    }
  } else {
    console.log("the given number is negative");
  }

  console.log(
    num == 0
      ? "num is zero"
      : num > 0
      ? "number is postive"
      : "number is negative"
  );
}

function p2() {
  // Check Whether a Number is Even or Odd

  let num = 828624;

  if (num % 2 == 0) console.log("the number is even");
  else console.log("the number is odd");

  console.log(num % 2 == 0 ? "the number is even" : "the number is odd");

  // bitwise
  console.log((num & 1) === 0 ? "the number is even" : "the number is odd");
}

function p3() {
  // Find the Sum of N Natural Numbers

  let num = 6;
  let total = 0;

  for (let i = 0; i <= num; i++) {
    total += i;
  }

  console.log(total);

  console.log((num * (num + 1)) / 2);

  function getsum(num) {
    if (num == 0) return 0;

    return num + getsum(num - 1);
  }

  console.log(getsum(num));

  return num;
}

function p4() {
  // Find the Sum of Numbers in a Given Range
  let r1 = 1;
  let r2 = 4;

  let sum = 0;

  for (let i = r1; i <= r2; i++) {
    sum += i;
  }

  // Formula: sum = n/2 * (first + last)
  // where n is the number of terms
  let n = r2 - r1 + 1;
  let sum_formula = (n * (r1 + r2)) / 2;

  // using recursion
  function get_range_sum(r1, r2) {
    if (r1 > r2) return 0;
    return r1 + get_range_sum(r1 + 1, r2);
  }

  let result = get_range_sum(r1, r2);
  console.log(result);

  return { sum, sum_formula };
}

function p5() {
  // Find the Greatest of the Two Numbers

  let num1 = 4;
  let num2 = 23;

  if (num1 !== num2) {
    if (num1 > num2) {
      console.log(`${num1} is greater than ${num2}`);
    } else {
      console.log(`${num2} is greater than ${num1}`);
    }
  } else {
    console.log("both are equal");
  }

  console.log(
    num1 == num2
      ? `both are equal`
      : num1 > num2
      ? `${num1} is greater than ${num2}`
      : `${num2} is greater than ${num1}`
  );

  console.log(Math.max(num1, num2));
}

// Call the function and get the returned object
// const result = p4();
// console.log(result.sum);
// console.log(result.sum_formula);

p5();
