function makeArrayConsecutive2(statues) {
  const statuesSet = new Set(statues);
  let minStatue = statues[0];
  let maxStatue = statues[0];
  for (let item of statuesSet) {
    if (item < minStatue) minStatue = item;
    if (item > maxStatue) maxStatue = item;
  }
  const additionalStatuesCount = maxStatue - minStatue - statuesSet.size + 1;
  return additionalStatuesCount;
}
