// by loop

function sum_arr(arr) {
  total = 0;

  for (num of arr) {
    total += num;
  }

  return total;
}

arr = [1, 2, 3, 4, 5, 6, 7];

// recursive way

function sum_arr_recursive(arr) {
  if (arr.length == 0) return 0;

  return arr[0] + sum_arr_recursive(arr.slice(1));
}

console.log(sum_arr_recursive(arr));
