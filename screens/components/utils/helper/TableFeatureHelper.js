function filterData(tableHeader, tableBody, filterText) {
  const listFilterableKeys = tableHeader.filter(heading => heading.filterable);
  let filteredRows = tableBody;

  if (listFilterableKeys.length !== 0) {
    // If #keys is 0, just proceed to sorting
    const filterableKeysLength = listFilterableKeys.length;

    filteredRows = filteredRows.filter((row) => {
      let isIncluded = false;
      let idx = 0;

      while (!isIncluded && idx < filterableKeysLength) {
        const currentKey = listFilterableKeys[idx].key;

        if (row[currentKey].toLowerCase().includes(filterText.toLowerCase())) {
          isIncluded = true;
        } else {
          idx += 1;
        }
      }

      return isIncluded;
    });
  }

  return filteredRows;
}

function sortData(tableHeader, tableBody, sort) {
  const { key, isAscending } = sort;
  let sortedData = tableBody;

  if (key !== '') {
    const sortArray = isAscending ? [1, -1] : [-1, 1];

    sortedData = tableBody.sort((rowA, rowB) => {
      if (rowA[key] > rowB[key]) {
        return sortArray[0];
      }

      return sortArray[1];
    });
  }

  return sortedData;
}

function paginateData(tableBody, pagination) {
  const { currentPage, rowsPerPage } = pagination;
  let paginatedRows = tableBody;

  if (currentPage) {
    paginatedRows = paginatedRows.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
  }

  return paginatedRows;
}

export { filterData, sortData, paginateData };
