function addBorder(picture) {
  const borderedPicture = ["*" + picture[0].replace(/./g, "*") + "*"];
  for (let i in picture) {
    borderedPicture.push("*" + picture[i] + "*");
  }
  borderedPicture.push(borderedPicture[0]);
  return borderedPicture;
}
