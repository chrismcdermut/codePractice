function minByColumn(table, column) {
  let currentMinimumValue = null;
  let currentMininumRow = 0;
  for (let i = 0; i < table.length; i++) {
    const currentTableRow = table[i];
    const currentRowsColumunValue = currentTableRow[column]
      ? currentTableRow[column] : 0;

    if (currentMinimumValue === null) {
      currentMinimumValue = currentRowsColumunValue;
    } else if (currentRowsColumunValue < currentMinimumValue) {
      currentMinimumValue = currentRowsColumunValue;
      currentMininumRow = i;
    }
  }
  return table[currentMininumRow];
}


module.exports = minByColumn;
