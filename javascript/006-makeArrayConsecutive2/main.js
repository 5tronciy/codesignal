function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function makeArrayConsecutive2(statues) {
  let additionalStatuesCount = 0;
  statues.sort(compareNumeric);
  for (let i = statues[0]; i < statues[statues.length - 1]; i++) {
    console.log(i, " ", statues);
    if (!statues.includes(i)) {
      additionalStatuesCount += 1;
    }
  }
  return additionalStatuesCount;
}
