function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let sum = 0;
      if (i > 0) {
        sum += matrix[i - 1][j];
        if (j > 0) {
          sum += matrix[i - 1][j - 1];
        }
        if (j < matrix[0].length - 1) {
          sum += matrix[i - 1][j + 1];
        }
      }
      if (j > 0) {
        sum += matrix[i][j - 1];
      }
      if (i < matrix.length - 1) {
        sum += matrix[i + 1][j];
        if (j > 0) {
          sum += matrix[i + 1][j - 1];
        }
        if (j < matrix[0].length - 1) {
          sum += matrix[i + 1][j + 1];
        }
      }
      if (j < matrix[0].length - 1) {
        sum += matrix[i][j + 1];
      }
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}
