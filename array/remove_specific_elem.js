function remove_specific_elem(arr, val) {
  let n = arr.length;
  let x = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x++;
    }
  }
  return x;
}

let arr = [3, 2, 2, 3];
let val = 3;
let newLen = remove_specific_elem(arr, val);
console.log("Full array after processing:", arr);
console.log("Result (first", newLen, "elements):", arr.slice(0, newLen));
