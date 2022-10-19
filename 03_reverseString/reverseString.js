const reverseString = function (string) {
  let rev = "";
  for (let i = string.length - 1; i >= 0; i--) {
    rev += string.charAt(i);
  }
  return rev;
};

// Do not edit below this line
module.exports = reverseString;
