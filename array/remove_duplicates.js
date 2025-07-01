// Remove Duplicates
// Expected Approach - O(n) Time and O(1) Space

// Since the array is sorted, we do not need to maintain a hash set. All occurrences of an element would be consecutive. So we mainly need to check if the current element is same as the previous element or not.

// inplace method o(n) and o(1)
// algo
// we have arr [1, 2, 2, 3, 4, 4, 4, 5, 5]
// we take inplace method var x to 0 and start loop from 1 to n and compare x !== i then arr[x] = arr[i]

function remove_duplicates(arr, n) {
  let x = 0;

  for (let i = 1; i < n; i++) {
    if (arr[x] !== arr[i]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return x;
}

let arr = [1, 1, 2];
let n = arr.length;

let newLength = remove_duplicates(arr, n);
console.log("Original array:", [1, 2, 2, 3, 4, 4, 4, 5, 5]);
console.log("Array after removing duplicates:", arr.slice(0, newLength + 1));
console.log("New length:", newLength + 1);
