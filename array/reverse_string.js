// reverser string in js

function reverse_string(arr) {
  let n = arr.length;
  let l = 0;
  let r = n - 1;

  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }

  return arr;
}

let arr = ["h", "e", "l", "l", "o"];
let new_Arr = reverse_string(arr);
console.log(new_Arr);
