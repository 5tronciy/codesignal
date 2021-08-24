function depositProfit(deposit, rate, threshold) {
  let amount = deposit;
  let count = 0;
  while (amount < threshold) {
    amount *= 1 + rate / 100;
    count += 1;
  }
  return count;
}
