import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import BodyRow from './BodyRow';

const TableBody = (props) => {
  const {
    colFlexArray,
    tableHeader,
    arrayOfRows,
    stripedColors,
    onCheckSingle,
    checkedObjects,
    bodyCellStyle,
  } = props;

  // Build rows
  const stripedColorsLength = stripedColors.length;

  const body = arrayOfRows.map((rowObject, trIndex) => {
    const rowColor = stripedColors[trIndex % stripedColorsLength];
    const isChecked = checkedObjects.includes(rowObject);

    return (
      <BodyRow
        key={`key-datatable-${trIndex}`}
        tableHeader={tableHeader}
        rowObject={rowObject}
        colFlexArray={colFlexArray}
        trIndex={trIndex}
        rowColor={rowColor}
        onCheckSingle={onCheckSingle}
        bodyCellStyle={bodyCellStyle}
        checked={isChecked}
      />
    );
  });

  return (
    <View style={{ flex: 1 }}>
      {body}
    </View>
  );
}

TableBody.propTypes = {
  colFlexArray: PropTypes.array.isRequired,
  tableHeader: PropTypes.array.isRequired,
  arrayOfRows: PropTypes.array.isRequired,
  stripedColors: PropTypes.array.isRequired,
  checkedObjects: PropTypes.array.isRequired,
  onCheckSingle: PropTypes.func.isRequired,
  bodyCellStyle: PropTypes.object.isRequired,
};

export default TableBody;
