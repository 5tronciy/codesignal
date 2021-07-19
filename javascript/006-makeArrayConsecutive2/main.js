function makeArrayConsecutive2(statues) {
  let minStatue = statues[0];
  let maxStatue = statues[0];
  for (let i = 1; i <= statues.length; i++) {
    if (statues[i] < minStatue) minStatue = statues[i];
    if (statues[i] > maxStatue) maxStatue = statues[i];
  }
  const additionalStatuesCount = maxStatue - minStatue - statues.length + 1;
  return additionalStatuesCount;
}
