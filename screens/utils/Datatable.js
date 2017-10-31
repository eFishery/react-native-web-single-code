import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
// Relative improts
import TableBody from './component/TableBody';
import TableHeader from './component/TableHeader';
import Pagination from './component/Pagination';

class Datatable extends React.Component {
  constructor(props) {
    super(props);

    // Set up default sort
    const { tableHeader, defaultSort, defaultRowsPerPage, rowsPerPageOption } = props;
    let initialSort = defaultSort;

    if (initialSort.key === '' || typeof initialSort.key === 'undefined') {
      const headerLength = tableHeader.length;
      const columnIndex = tableHeader.findIndex(heading => heading.sortable );

      if (columnIndex !== -1) {
        // Exclusive only if at least a column is sortable
        initialSort = {
          key: tableHeader[columnIndex].key,
          isAscending: true,
        };
      }
    }

    const pagination = rowsPerPageOption.length ?
      { currentPage: 1, rowsPerPage: defaultRowsPerPage } : {};

    this.state = {
      sort: initialSort,
      filterText: '',
      pagination,
      isAllChecked: false,
      checkedObjects: [],
    };
  }

  onSort = (newKey) => () => {
    const prevSort = this.state.sort;
    let newSort = {};

    if (prevSort.key === newKey) {
      newSort = { ...prevSort, isAscending: !prevSort.isAscending };
    } else {
      newSort = { key: newKey, isAscending: true };
    }

    this.setState({ sort: newSort });
  }

  onFilterText = (newFilter) => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        currentPage: 1,
      },
      filterText: newFilter,
      isAllChecked: false,
      checkedObjects: [],
    });
  }

  onChangePage = (currentPage) => () => {
    const hasFirstLast = this.props.hasFirstLast;

    const pagination = {
      ...this.state.pagination,
      currentPage,
    };

    this.setState({ pagination });
  }

  onCheckAll = (isAllChecked, filteredData) => () => {
    const newCheckedObjects = isAllChecked ? [] : filteredData.filter(el => el._checkable);

    this.setState({
      isAllChecked: !isAllChecked,
      checkedObjects: newCheckedObjects,
    });
  }

  onCheckSingle = (object) => () => {
    let newState = this.state.checkedObjects;
    const indexOfObject = newState.findIndex(obj => obj === object);
    const length = newState.length;

    if (indexOfObject === -1) {
      // Not found, push
      this.setState({
        checkedObjects: [
          ...newState,
          object,
        ],
      });
    } else {
      // Found, remove from checkedObjects
      const newObject = newState.slice(0, indexOfObject)
        .concat(newState.slice(indexOfObject + 1, length));

      this.setState({
        checkedObjects: newObject,
      });
    }
  }

  filterData(tableHeader, tableBody, filterText) {
    const listFilterableKeys = tableHeader.filter(heading => heading.filterable);
    let filteredRows = tableBody;

    if (listFilterableKeys.length !== 0) {
      // If #keys is 0, just proceed to sorting
      const filterableKeysLength = listFilterableKeys.length;

      filteredRows = filteredRows.filter(row => {
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

  sortData(tableHeader, tableBody, sort) {
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

  paginateData(tableBody) {
    const { currentPage, rowsPerPage } = this.state.pagination;
    let paginatedRows = tableBody;

    if (currentPage) {
      paginatedRows = paginatedRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    }

    return paginatedRows;
  }

  render() {
    const {
      tableHeader,
      tableBody,
      keyName,
      hasFirstLast,
      colFlexArray,
      stripedColors,
      buttonWrapperStyle,
      buttonActiveStyle,
      buttonStyle,
      headingCellStyle,
      bodyCellStyle,
      filterTextStyle,
    } = this.props;
    const { sort, filterText, pagination, checkedObjects } = this.state;

    const colFlexLength = colFlexArray.length;
    const headingsLength = tableHeader.length;

    const flexArray = colFlexLength === headingsLength ?  colFlexArray : Array.from(tableHeader, () => 1);

    const filteredData = this.filterData(tableHeader, tableBody, filterText);
    const sortedData = this.sortData(tableHeader, filteredData, sort);
    const paginatedData = this.paginateData(sortedData);

    const checkableFilteredData = filteredData.filter(el => el._checkable);
    const isAllChecked = checkableFilteredData.length === checkedObjects.length;

    return (
      <View style={styles.viewMargin}>
        <Pagination
          arrayOfRows={sortedData}
          pagination={pagination}
          onChangePage={this.onChangePage}
          hasFirstLast={hasFirstLast}
          keyName={keyName}
          buttonWrapperStyle={buttonWrapperStyle}
          buttonActiveStyle={buttonActiveStyle}
          buttonStyle={buttonStyle}
        />
        <TextInput
          style={filterTextStyle}
          placeholder="Search text..."
          onChangeText={this.onFilterText}
        />
        <TableHeader
          colFlexArray={flexArray}
          sort={sort}
          headings={tableHeader}
          onSort={this.onSort}
          onCheckAll={this.onCheckAll}
          checkableFilteredData={checkableFilteredData}
          isAllChecked={isAllChecked}
          headingCellStyle={headingCellStyle}
        />
        <TableBody
          colFlexArray={flexArray}
          headings={tableHeader}
          arrayOfRows={paginatedData}
          stripedColors={stripedColors}
          onCheckSingle={this.onCheckSingle}
          checkedObjects={checkedObjects}
          bodyCellStyle={bodyCellStyle}
        />
      </View>
    );
  }
}

Datatable.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  tableBody: PropTypes.array.isRequired,
  keyName: PropTypes.string.isRequired,
  stripedColors: PropTypes.array,
  colFlexArray: PropTypes.array,
  defaultSort: PropTypes.object,
  rowsPerPageOption: PropTypes.array,
  defaultRowsPerPage: PropTypes.number,
  hasFirstLast: PropTypes.bool,
  headingCellStyle: PropTypes.object,
  bodyCellStyle: PropTypes.object,
  filterTextStyle: PropTypes.object,
};

Datatable.defaultProps = {
  colFlexArray: [],
  stripedColors: ['#F4F4F6', '#CACFD8'],
  headingCellStyle: {},
  bodyCellStyle: {},
  defaultSort: { key: '' },
  defaultRowsPerPage: 10,
  rowsPerPageOption: [],
  hasFirstLast: false,
  buttonWrapperStyle: {
    marginLeft: 1,
    marginRight: 1,
    flex: 1,
  },
  buttonActiveStyle: {
    backgroundColor: '#eee',
    color: '#bbb',
  },
  buttonStyle: {
    backgroundColor: '#bbb',
    color: '#fff'
  },
};

const styles = StyleSheet.create({
  viewMargin: {
    marginTop: 15,
  },
});

export default Datatable;
