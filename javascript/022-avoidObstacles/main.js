function avoidObstacles(inputArray) {
  for (let i = 2; ; i++) {
    if (inputArray.filter((obstacle) => obstacle % i === 0).length === 0) {
      return i;
    }
  }
}
