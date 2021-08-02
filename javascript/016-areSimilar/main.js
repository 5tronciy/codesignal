function areSimilar(a, b) {
  let i = 0;
  const diff = [];
  while (i < a.length) {
    if (a[i] !== b[i]) {
      diff.push(i);
    }
    i++;
  }
  console.log(diff);
  switch (diff.length) {
    case 0:
      return true;
    case 2:
      return a[diff[0]] === b[diff[1]] && b[diff[0]] === a[diff[1]]
        ? true
        : false;
    default:
      return false;
  }
}
