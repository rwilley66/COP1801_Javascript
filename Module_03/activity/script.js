function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  return joinArray;
}

newStr = reverseString("Jason Jones");
console.log(newStr);
