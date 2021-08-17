function variableName(name) {
  if (Number(name[0]) || name[0] === "0") {
    return false;
  }
  for (let char of name) {
    if (
      !Number(char) &&
      char !== "0" &&
      "_".indexOf(char) === -1 &&
      char.toLowerCase() == char.toUpperCase()
    ) {
      return false;
    }
  }
  return true;
}
