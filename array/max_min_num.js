function max(arr, n) {
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function min(arr, n) {
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function minmax_sort(arr) {
  let minmax = {};

  arr.sort((a, b) => a - b);

  minmax.min = arr[0];

  minmax.max = arr[arr.length - 1];

  return minmax;
}

const arr = [2, 3, 45, 65, 12, 55, 2, 5, 21, 56, 32];

let n = arr.length;

const minmax = minmax_sort(arr);
console.log(
  `the min num in arr is ${minmax.min} and the max num in arr is ${minmax.max}`
);

// let maxele = max(arr, n);
// let minele = min(arr, n);

// console.log(`max elem ${maxele} and min elem ${minele}`);
