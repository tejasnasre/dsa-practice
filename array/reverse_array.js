// reverse array using temp

function reverse_array_temp(arr) {
  let n = arr.length;

  let temp = new Array(n);

  for (let i = 0; i < n; i++) {
    temp[i] = arr[n - i - 1];
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
}

function reverse_array_two_pointers(arr) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
}

function reverse_array_swaping(arr) {
  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
}

function reverse_array_recursively(arr, l, r) {
  if (l >= r) return;

  [arr[l], arr[r]] = [arr[r], arr[l]];

  reverse_array_recursively(arr, l + 1, r - 1);
}

function reverse_array_built_in(arr) {
  arr.reverse();
}

const arr = [1, 2, 3, 4, 5];

// reverse_array_temp(arr);
// reverse_array_two_pointers(arr);
// reverse_array_swaping(arr);
// reverse_array_recursively(arr, 0, arr.length - 1);
reverse_array_built_in(arr);
console.log(arr.join(" "));
