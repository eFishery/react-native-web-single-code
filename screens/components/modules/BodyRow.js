import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CheckBox from './CheckBox';

// Private function
const createKey = (key, trIndex, tdIndex) => `key-${key}-${trIndex}-${tdIndex}`;

// Exported function
const BodyRow = (props) => {
  const {
    rowObject,
    colFlexArray,
    tableHeader,
    trIndex,
    rowColor,
    checked,
    onCheckSingle,
    bodyCellStyle,
  } = props;

  const checkboxProps = {
    containerStyle: {
      backgroundColor: bodyCellStyle.backgroundColor,
      padding: 0,
      margin: 0,
    },
    size: 16,
    uncheckedColor: '#000',
    onPress: onCheckSingle(rowObject),
    checked,
  };
  const row = tableHeader.map((tdObject, tdIndex) => {
    const { key: tdKey, cell: tdCell } = tdObject;
    let childComponent;
    let keyName;

    if (tdKey === 'checkbox') {
      // if column is a checkbox
      childComponent = rowObject.checkable ?
        (<CheckBox {...checkboxProps} />) : (<Text></Text>);
      keyName = createKey('checkbox', trIndex, '*');
    } else {
      // If an ordinary column
      keyName = (createKey('datatable', trIndex, tdIndex));
      childComponent = tdCell ? tdCell(rowObject) : (<Text>{rowObject[tdKey]}</Text>);
    }

    return (
      <View
        key={keyName}
        style={{ ...bodyCellStyle, flex: colFlexArray[tdIndex] }}
      >
        {childComponent}
      </View>
    );
  });

  return (
    <View style={{flex: 0, flexDirection: 'row', backgroundColor: rowColor}}>
      {row}
    </View>
  );
};

BodyRow.propTypes = {
  rowObject: PropTypes.object.isRequired,
  colFlexArray: PropTypes.array.isRequired,
  trIndex: PropTypes.number.isRequired,
  rowColor: PropTypes.string.isRequired,
  onCheckSingle: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  bodyCellStyle: PropTypes.object.isRequired,
};

export default BodyRow;
