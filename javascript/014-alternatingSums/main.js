function alternatingSums(a) {
  const sums = [0, 0];
  for (let i in a) {
    if (i % 2 === 0) {
      sums[0] += a[i];
    } else {
      sums[1] += a[i];
    }
  }
  return sums;
}
