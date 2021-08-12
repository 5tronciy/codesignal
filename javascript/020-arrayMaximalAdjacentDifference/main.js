function arrayMaximalAdjacentDifference(inputArray) {
  let maxDifference = 0;
  for (let i = 1; i < inputArray.length; i++) {
    const difference = Math.abs(inputArray[i] - inputArray[i - 1]);
    if (maxDifference < difference) {
      maxDifference = difference;
    }
  }
  return maxDifference;
}
