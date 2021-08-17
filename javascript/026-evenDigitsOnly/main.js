function evenDigitsOnly(n) {
  for (let char of n.toString()) {
    if (char % 2 === 1) {
      return false;
    }
  }
  return true;
}
