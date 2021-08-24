const nextChar = (char) => {
  const charCode = char.codePointAt(0);
  if (charCode === 122) {
    return String.fromCodePoint(97);
  } else {
    return String.fromCodePoint(charCode + 1);
  }
};

function alphabeticShift(inputString) {
  let output = "";
  for (let char of inputString) {
    output += nextChar(char);
  }
  return output;
}
