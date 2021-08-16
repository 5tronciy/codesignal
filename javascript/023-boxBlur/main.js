function boxBlur(image) {
  const result = [];
  for (let i = 1; i < image.length - 1; i++) {
    const row = [];
    for (let j = 1; j < image[0].length - 1; j++) {
      row.push(
        Math.floor(
          (image[i - 1][j - 1] +
            image[i - 1][j] +
            image[i - 1][j + 1] +
            image[i][j - 1] +
            image[i][j] +
            image[i][j + 1] +
            image[i + 1][j - 1] +
            image[i + 1][j] +
            image[i + 1][j + 1]) /
            9
        )
      );
    }
    result.push(row);
  }
  return result;
}
