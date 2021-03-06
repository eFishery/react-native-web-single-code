import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import FontAwesome from './FontAwesome';
import CheckBox from './CheckBox';

const TableHeader = (props) => {
  const {
    colFlexArray,
    sort,
    tableHeader,
    checkableFilteredData,
    onSort,
    onCheckAll,
    isAllChecked,
    headingCellStyle,
  } = props;
  const { key: sortKey, isAscending } = sort;

  // Build header columns
  const columns = tableHeader.map((dataElement, thIndex) => {
    const {
      title: thTitle,
      key: thKey,
      sortable: isThSortable,
      checkbox: isThACheckbox,
    } = dataElement;
    const { padding, ...styleExceptPadding } = headingCellStyle;

    const touchableStyle = {
      flexDirection: 'row',
      flex: colFlexArray[thIndex],
      ...styleExceptPadding,
    };
    const headerStyle = { ...touchableStyle, padding };

    if (isThSortable && !isThACheckbox) {
      let iconName = 'sort';

      if (thKey === sortKey) {
        iconName = isAscending ? 'sort-asc' : 'sort-desc';
      }

      return (
        <TouchableHighlight
          onPress={onSort(thKey)}
          key={`key-heading-${thIndex}`}
          style={touchableStyle}
        >
          <View style={headerStyle}>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start' }}>
              <Text>{thTitle}</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
              <Text>
                <FontAwesome
                  name={iconName}
                  size={15}
                  color="#900"
                />
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    } else if (!isThSortable && isThACheckbox) {
      const checkboxProps = {
        containerStyle: {
          backgroundColor: headerStyle.backgroundColor,
          borderColor: headerStyle.backgroundColor,
          padding: 0,
          margin: 0,
        },
        size: 16,
        uncheckedColor: '#000',
        onPress: onCheckAll(isAllChecked, checkableFilteredData),
        checked: isAllChecked,
      };

      return (
        <View style={headerStyle} key={`key-heading-${thIndex}`}>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start' }}>
            <CheckBox {...checkboxProps} />
          </View>
        </View>
      );
    } else {
      return (
        <View style={headerStyle} key={`key-heading-${thIndex}`}>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start' }}>
            <Text>{thTitle}</Text>
          </View>
        </View>
      );
    }
  });

  // Return rendered columns
  return (
    <View style={{flex: 0, flexDirection: 'row'}}>
      {columns}
    </View>
  )
};

TableHeader.propTypes = {
  colFlexArray: PropTypes.array.isRequired,
  tableHeader: PropTypes.array.isRequired,
  checkableFilteredData: PropTypes.array.isRequired,
  sort: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  onCheckAll: PropTypes.func.isRequired,
  isAllChecked: PropTypes.bool.isRequired,
  headingCellStyle: PropTypes.object.isRequired,
};

export default TableHeader;
