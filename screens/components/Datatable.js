import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
// Relative improts
import TableBody from './modules/TableBody';
import TableHeader from './modules/TableHeader';
import Pagination from './modules/Pagination';
import { filterData, sortData, paginateData } from './helper/TableFeatureHelper';

const styles = StyleSheet.create({
  viewMargin: {
    marginTop: 15,
    flex: 1,
  },
});

class Datatable extends React.Component {
  constructor(props) {
    super(props);

    // Set up default sort
    const {
      tableHeader, defaultSort, defaultRowsPerPage, rowsPerPageOption,
    } = props;
    let initialSort = defaultSort;

    if (initialSort.key === '' || typeof initialSort.key === 'undefined') {
      const columnIndex = tableHeader.findIndex(heading => heading.sortable);

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
      checkedObjects: [],
    };
  }

  onSort = newKey => () => {
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
      checkedObjects: [],
    });
  }

  onChangePage = currentPage => () => {
    const pagination = {
      ...this.state.pagination,
      currentPage,
    };

    this.setState({ pagination });
  }

  onCheckAll = (isAllChecked, filteredData) => () => {
    const newCheckedObjects = isAllChecked ? [] : filteredData.filter(el => el.checkable);

    this.setState({
      checkedObjects: newCheckedObjects,
    });
  }

  onCheckSingle = object => () => {
    const newState = this.state.checkedObjects;
    const indexOfObject = newState.findIndex(obj => obj === object);
    const { length } = newState;

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
    const {
      sort,
      filterText,
      pagination,
      checkedObjects,
    } = this.state;

    const colFlexLength = colFlexArray.length;
    const tableHeaderLength = tableHeader.length;

    const flexArray = colFlexLength === tableHeaderLength ?
      colFlexArray : Array.from(tableHeader, () => 1);

    const filteredData = filterData(tableHeader, tableBody, filterText);
    const sortedData = sortData(tableHeader, filteredData, sort);
    const paginatedData = paginateData(sortedData, pagination);

    const checkableFilteredData = filteredData.filter(el => el.checkable);
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
          tableHeader={tableHeader}
          onSort={this.onSort}
          onCheckAll={this.onCheckAll}
          checkableFilteredData={checkableFilteredData}
          isAllChecked={isAllChecked}
          headingCellStyle={headingCellStyle}
        />
        <TableBody
          colFlexArray={flexArray}
          tableHeader={tableHeader}
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
  buttonWrapperStyle: PropTypes.object,
  buttonActiveStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
};

Datatable.defaultProps = {
  colFlexArray: [],
  stripedColors: ['#F4F4F6', '#CACFD8'],
  headingCellStyle: {},
  bodyCellStyle: {},
  defaultSort: { key: '' },
  defaultRowsPerPage: 10,
  rowsPerPageOption: [5, 10, 15, 20],
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
    color: '#fff',
  },
  filterTextStyle: {},
};

export default Datatable;
