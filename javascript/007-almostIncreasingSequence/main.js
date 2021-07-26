const strictlyIncreasingSequence = (sequence) => {
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i + 1] <= sequence[i]) {
      return false;
    }
  }
  return true;
};

const almostIncreasingSequence = (sequence) => {
  for (let i = 0; i < sequence.length; i++) {
    const removed = sequence.splice(i, 1);
    if (strictlyIncreasingSequence(sequence)) {
      return true;
    }
    sequence.splice(i, 0, removed[0]);
  }
  return false;
};
