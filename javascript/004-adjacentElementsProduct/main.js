function adjacentElementsProduct(inputArray) {
  let largestProduce = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length; i++) {
    const produce = inputArray[i] * inputArray[i + 1];
    if (produce > largestProduce) {
      largestProduce = produce;
    }
  }
  return largestProduce;
}
