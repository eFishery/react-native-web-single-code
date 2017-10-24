import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const BodyRow = (props) => {
  const { rowObject, colFlexArray, headings, trIndex, bgColor } = props;

  const row = Object.keys(rowObject).map((tdKey, tdIndex) => {
    return (
      <View
        key={`key-datatable-${trIndex}-${tdIndex}`}
        style={{ flex: colFlexArray[tdIndex] }}
      >
        <Text>{rowObject[tdKey]}</Text>
      </View>
    );
  });

  return (
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: bgColor}}>
      {row}
    </View>
  );
};

BodyRow.propTypes = {
  rowObject: PropTypes.object.isRequired,
  colFlexArray: PropTypes.array.isRequired,
  headings: PropTypes.array.isRequired,
  trIndex: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default BodyRow;
