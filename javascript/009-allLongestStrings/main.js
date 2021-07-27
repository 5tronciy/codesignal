function allLongestStrings(inputArray) {
  let longestStrings = [inputArray[0]];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length == longestStrings[0].length) {
      longestStrings.push(inputArray[i]);
    }
    if (inputArray[i].length > longestStrings[0].length) {
      longestStrings = [inputArray[i]];
    }
  }
  return longestStrings;
}
