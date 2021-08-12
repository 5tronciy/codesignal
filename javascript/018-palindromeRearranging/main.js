function palindromeRearranging(inputString) {
  const symbols = inputString.split("").sort();
  const a = [];
  const b = [];
  for (let i = 0; i < symbols.length; i++) {
    if (i % 2 === 0) {
      a.push(symbols[i]);
    } else {
      b.push(symbols[i]);
    }
  }
  console.log(a, b);
  if (a.length === b.length) {
    return a.join("") === b.join("");
  } else {
    a.forEach((item, index, array) => {
      if (b.includes(item)) {
        delete a[index];
      }
    });
    return a.join("").length < 2;
  }
}
