function sortByHeight(a) {
  let i = 0;
  for (let j = 0; j < a.length; j++) {
    i = j;
    for (i; i < a.length; i++) {
      if (a[i] < a[j] && a[i] != -1) {
        let k = a[j];
        a[j] = a[i];
        a[i] = k;
      }
    }
  }
  return a;
}
