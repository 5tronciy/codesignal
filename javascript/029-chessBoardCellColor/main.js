function chessBoardCellColor(cell1, cell2) {
  return (
    (cell1.codePointAt(0) + Number(cell1[1])) % 2 ===
    (cell2.codePointAt(0) + Number(cell2[1])) % 2
  );
}
