// 1. Find the maximum element in an array. ✅
// 2. Count the number of even and odd numbers in a list. ✅
// 3. Reverse a given string. ✅
// 4. Check if a number is prime. ✅
// 5. Print the Fibonacci sequence up to N terms. ✅
// 6. Find the second largest element in an array.✅
// 7. Check if a string is a palindrome. ✅
// 8. Sort an array using bubble sort. ✅
// 9. Find the sum of digits of a number.
// 10. Calculate the factorial of a number.
// 11. Merge two sorted arrays into one.
// 12. Count the frequency of elements in an array.
// 13. Find the missing number in a range from 1 to N.
// 14. Check if two strings are anagrams.
// 15. Remove duplicate elements from an array.
// 16. Find the largest sum subarray (Kadane’s Algorithm).
// 17. Check if a number is an Armstrong number.
// 18. Rotate an array to the left by K steps.
// 19. Find the intersection of two arrays.
// 20. Move all zeros to the end of an array.
// 21. Implement binary search on a sorted array.
// 22. Check if a number is a perfect square.
// 23. Count vowels and consonants in a string.
// 24. Find the GCD of two numbers.
// 25. Convert a binary number to decimal.
// 26. Find the first non-repeating character in a string.
// 27. Implement a stack using arrays.
// 28. Implement a queue using two stacks.
// 29. Check if brackets are balanced in an expression.
// 30. Find the majority element in an array (if any).

function que1_t1() {
  // Iterative Approach
  // Make a global variable max = -Infinity
  // Make Iteration for array
  // compare the -Infinity is less than current num in array if yes add the current number in global varaible
  //repeat this comparision till the array end
  // return the max number

  let arr = [1, 2, 34, 23, 4, 5, 6, 6];

  let max = -Infinity;

  for (let i = 0; i <= arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

function que1_t2() {
  // approach to find maxmimum number in array using sorting
  // make arr
  // sort bubble sorti i = 0,j = i + 1 and of i > j swap
  //   return arr[arr.length - 1]
  let arr = [
    4, 5, 2, 5, 6, 2, 45, 22, 56, 21, 465, 22, 1, 45, 6, 21, 1, 354, 1,
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr[arr.length - 1];
}

function que1_t3() {
  let arr = [2, 3, 45, 5, 6, 3, 4, 6, 3, 2, 56];

  return Math.max(...arr);
}

function que2_t1() {
  // Count the number of even and odd numbers in a list.
  let arr = [343, 45, 5, 2, 2, 56, 6, 4, 3, 2, 5, 7, 4, 2, 24, 5];

  let odd_num = [];
  let even_num = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (!even_num.includes(arr[i])) {
        even_num.push(arr[i]);
      }
    } else {
      if (!odd_num.includes(arr[i])) {
        odd_num.push(arr[i]);
      }
    }
  }

  return [even_num, odd_num];
}

function que2_t2() {
  let arr = [
    1, 2, 3, 54, 3, 54, 5, 3, 5, 2, 1, 54, 5, 2, 5, 5, 2, 1, 4, 5, 42, 5, 53, 1,
  ];

  let uniqueOdd = new Set();
  let uniqueEven = new Set();

  for (let i of arr) {
    if (i % 2 === 0) {
      uniqueEven.add(i);
    } else {
      uniqueOdd.add(i);
    }
  }

  return [uniqueOdd.size, uniqueEven.size];
}

function que3_t1(str) {
  if (str <= 1) return str;

  return que3_t1(str.slice(1)) + str[0];
}

function que3_t2(str) {
  rev_str = "";

  for (s of str) {
    rev_str = s + rev_str;
  }

  return rev_str;
}

function que3_t3(str) {
  let str_split = str.split("");
  let reverse_split = str_split.reverse();

  return reverse_split.join("");
}

function que3_t4(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

function que4_t1() {
  // Brute force approach
  let num = 5;
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count = count + 1;
    }
  }

  if (count === 2) {
    return true;
  } else {
    return false;
  }
}

function que4_t2() {
  // optimal solution
  let num = 234;
  let count = 0;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count = count + 1;

      if (num / i !== i) {
        count = count + 1;
      }
    }
  }

  if (count === 2) return true;
  else return false;
}

function que5_t1() {
  // Fibonacci sequence
  let n = 2; // Number of terms to print
  let first = 0;
  let second = 1;
  let next;

  console.log(first); // Print first term
  console.log(second); // Print second term

  for (let i = 2; i < n; i++) {
    next = first + second;
    console.log(next);
    first = second;
    second = next;
  }
}

function que5_t2() {
  function fboseries(n) {
    if (n <= 1) return n;

    return fboseries(n - 1) + fboseries(n - 2);
  }
  return fboseries(5);
}

function que6() {
  let arr = [3, 4, 5, 6, 3, 5, 3, 2, 2, 5, 6, 5, 6, 3, 4, 6, 3, 2, 5];

  // Using Set to get unique values
  let uniqueValues = [...new Set(arr)];

  // Sort the unique values
  for (let i = 0; i < uniqueValues.length; i++) {
    for (let j = i + 1; j < uniqueValues.length; j++) {
      if (uniqueValues[i] > uniqueValues[j]) {
        [uniqueValues[i], uniqueValues[j]] = [uniqueValues[j], uniqueValues[i]];
      }
    }
  }

  return uniqueValues[uniqueValues.length - 2];
}

function que7_t1(str) {
  if (str == str.split("").reverse().join("")) return true;
  else return false;
}

function que7_t2(str) {
  // two pointer apporach
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

function que8() {
  let arr = [5, 3, 254, 6, 21, 4, 6, 3, 2, 22, 5, 2];

  // Bubble sort the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  // Filter out duplicates
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

function que9_t1(num) {
  let sum = 0;

  while (num !== 0) {
    let last = num % 10;

    sum += last;

    num = Math.floor(num / 10);
  }

  return sum;
}

function que9_t2(num) {
  let numstr = num.toString();
  let sum = 0;

  for (let ch of numstr) {
    sum += parseInt(ch);
  }

  return sum;
}

function que9_t3(num) {
  // recursivly
  if (num == 0) return 0;

  // Recursive Case
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

function que10(n) {
  if (n == 0 || n == 1) return 1;

  return n * que10(n - 1);
}

// let result = que3_t4("tejas");
// console.log("event count", result[0].length, " odd count", result[1].length);
// console.log(result[0], result[1]);
let result = que10(8);
console.log(result);
