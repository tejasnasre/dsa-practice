function check_valid_mobile_number(mobile_number) {
  let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);

  if (mobile_number == null) return false;

  return regex.test(mobile_number) == true ? true : false;
}

let result = check_valid_mobile_number("8623981647");
console.log(result);
