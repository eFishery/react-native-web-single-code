import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Button from './Button';

const Pagination = (props) => {
  const {
    arrayOfRows,
    pagination,
    onChangePage,
    hasFirstLast,
    keyName,
    buttonWrapperStyle,
    buttonActiveStyle,
    buttonStyle,
  } = props;
  const { currentPage, rowsPerPage } = pagination;
  let renderedPagination = (<View></View>);

  if (typeof currentPage !== 'undefined') {
    const maxPage = Math.ceil(arrayOfRows.length / rowsPerPage);
    let buttons = [];
    let startNum;

    // Define what page number will appear after the "First" button
    if (currentPage === 1) {
      startNum = 1;
    } else if (currentPage === maxPage && maxPage !== 1) {
      startNum = (maxPage - 2 > 0) ? currentPage - 2 : 1;
    } else {
      startNum = currentPage - 1;
    }

    // Push 3 buttons to buttons array
    let btnCount = 0;

    while (btnCount < 3 && startNum <= maxPage) {
      const style = startNum === currentPage ? buttonActiveStyle : buttonStyle;
      const btn = (
        <Button
          key={`${keyName}-paginate-${startNum}`}
          containerViewStyle={buttonWrapperStyle}
          title={`${startNum}`}
          onPress={onChangePage (startNum)}
          raised={currentPage !== startNum}
          {...style}
        />
      );

      buttons.push(btn);

      startNum += 1;
      btnCount += 1;
    }

    if (hasFirstLast) {
      const firstBtn = (
        <Button
          key={`${keyName}-paginate-first`}
          containerViewStyle={buttonWrapperStyle}
          title="First"
          onPress={onChangePage(1)}
          disabled={maxPage === 0 || currentPage === 1}
          raised
          {...buttonStyle}
        />
      );
      const lastBtn = (
        <Button
          key={`${keyName}-paginate-last`}
          containerViewStyle={buttonWrapperStyle}
          title="Last"
          onPress={onChangePage(maxPage)}
          disabled={maxPage === 0 || currentPage === maxPage}
          raised
          {...buttonStyle}
        />
      );

      buttons = [firstBtn, ...buttons, lastBtn];
    }

    renderedPagination = (
      <View style={{ flex: 0, flexDirection: 'row' }}>
        {buttons}
      </View>
    );
  }

  return renderedPagination;
};

Pagination.propTypes = {
  arrayOfRows: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  onChangePage: PropTypes.func.isRequired,
  buttonWrapperStyle: PropTypes.object.isRequired,
  buttonActiveStyle: PropTypes.object.isRequired,
  buttonStyle: PropTypes.object.isRequired,
  hasFirstLast: PropTypes.bool,
};

Pagination.defaultProps = {
  hasFirstLast: false,
};

export default Pagination;
