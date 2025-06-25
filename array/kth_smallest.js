function kth_smallest(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr[k - 1];
}
// by bubble sort

function kth_smallest_insertion(arr, k) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr[k - 1];
}

arr = [3, 45, 5, 6, 7, 32, 56];
k = 4;

// let result = kth_smallest(arr, k);
let result = kth_smallest_insertion(arr, k);
console.log(result);
