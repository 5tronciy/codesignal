function reverseInParentheses(inputString) {
  while (inputString.indexOf(")", 0) != -1) {
    const c = inputString.indexOf(")", 0);
    const a = inputString.lastIndexOf("(", c);
    const b = inputString
      .slice(a + 1, c)
      .split("")
      .reverse()
      .join("");
    inputString = inputString.slice(0, a) + b + inputString.slice(c + 1);
  }
  return inputString;
}
