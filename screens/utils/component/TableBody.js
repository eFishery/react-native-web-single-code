import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import BodyRow from './BodyRow';

const TableBody = (props) => {
  const { arrayOfRows, headings, colFlexArray, stripedColors } = props;
  const stripedColorsLength = stripedColors.length;

  const body = arrayOfRows.map((rowObject, trIndex) => {
    const bgColor = stripedColors[trIndex % stripedColorsLength];

    return (
      <BodyRow
        key={`key-datatable-${trIndex}`}
        rowObject={rowObject}
        colFlexArray={colFlexArray}
        headings={headings}
        trIndex={trIndex}
        bgColor={bgColor}
      />
    );
  });

  return (
    <View>
      {body}
    </View>
  );
}

TableBody.propTypes = {
  colFlexArray: PropTypes.array.isRequired,
  headings: PropTypes.array.isRequired,
  arrayOfRows: PropTypes.array.isRequired,
  stripedColors: PropTypes.array,
};

TableBody.defaultProps = {
  stripedColors: ['#F4F4F6', '#CACFD8'],
};

export default TableBody;
