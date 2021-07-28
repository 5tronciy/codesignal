function isLucky(n) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i <= n.toString().length / 2 - 1; i++) {
    leftSum += Number(n.toString()[i]);
  }
  for (let i = n.toString().length - 1; i > n.toString().length / 2 - 1; i--) {
    rightSum += Number(n.toString()[i]);
  }
  return leftSum === rightSum;
}
