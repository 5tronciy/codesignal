function isIPv4Address(inputString) {
  const numbers = inputString.split(".");
  let count = 0;
  for (number of numbers) {
    if (
      number < 0 ||
      number > 255 ||
      number === "" ||
      (number[0] === "0" && number.length > 1) ||
      isNaN(Number(number))
    ) {
      return false;
    }
    count += 1;
  }
  return count === 4;
}
