// classic approach

function reverse_string(s) {
  rev_str = "";

  for (str of s) {
    rev_str = str + rev_str;
  }

  return rev_str;
}

// console.log(reverse_string("hello"));

function reverse_string_recursive(s) {
  if (s.length <= 1) return s;

  return reverse_string_recursive(s.slice(1)) + s[0];
}

console.log(reverse_string_recursive("tiger"));
