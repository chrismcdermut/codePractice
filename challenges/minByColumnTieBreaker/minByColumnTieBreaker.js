function findMinimumRowValue(table) {
  for (let i = 0; i < table.length; i++) {
    const currentTableRow = table[i];
    const column = tieBreakers[currentColumnIndex];

    const currentRowsColumunValue = currentTableRow[column]
      ? currentTableRow[column] : 0;

    if (currentMinimumValue === null) {
      currentMinimumValue = currentRowsColumunValue;
    } else if (currentRowsColumunValue <= currentMinimumValue) {
      currentMinimumValue = currentRowsColumunValue;
      currentMininumRow = i;

      // clear out if new minimum value, then push in
      minimumValueRowsTable.push(currentMininumRow);
    }
  }

  const result = words.filter((word) => word.length > 6);
  table.filter((row) => row[currentColumn] <= currentMinimumValue);
}

function minByColumnTieBreaker(table, tieBreakers) {
  const minimumValueRowsTable = [];

  let currentMinimumValue = null;
  let currentMininumRow = 0;
  const currentColumnIndex = 0;
  // let runMinimumCheck = true;

  // while (runMinimumCheck) {
  for (let i = 0; i < table.length; i++) {
    const currentTableRow = table[i];
    const column = tieBreakers[currentColumnIndex];

    const currentRowsColumunValue = currentTableRow[column]
      ? currentTableRow[column] : 0;

    if (currentMinimumValue === null) {
      currentMinimumValue = currentRowsColumunValue;
    } else if (currentRowsColumunValue <= currentMinimumValue) {
      currentMinimumValue = currentRowsColumunValue;
      currentMininumRow = i;

      // clear out if new minimum value, then push in
      minimumValueRowsTable.push(currentMininumRow);
    }
  }

  table.filter((row) => {
    const currentTableRow = table[i];
    const column = tieBreakers[currentColumnIndex];
    const currentRowsColumunValue = currentTableRow[column]
      ? currentTableRow[column] : 0;

    return row[currentColumn] <= currentMinimumValue || currentMinimumValue === null;
  });

  //   if (minimumValueRowsTable.length > 1) {
  //     runMinimumCheck = true;
  //     currentColumnIndex += 1;
  //   } else {
  //     runMinimumCheck = false;
  //   }
  // }

  return minimumValueRowsTable[0];
}

module.exports = minByColumnTieBreaker;
