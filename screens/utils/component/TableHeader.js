import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const TableHeader = (props) => {
  const { headings, colFlexArray, backgroundColor, headerHeight } = props;
  const columns = headings.map((dataElement, thIndex) => {
    const thTitle = dataElement.title;
    const headerStyle = {
      flex: colFlexArray[thIndex],
      backgroundColor: backgroundColor,
      height: headerHeight,
    };

    return (
      <View key={`key-heading-${thIndex}`} style={headerStyle}>
        <Text>{thTitle}</Text>
      </View>
    );
  });

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {columns}
    </View>
  )
};

TableHeader.propTypes = {
  colFlexArray: PropTypes.array.isRequired,
  headings: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string,
  headerHeight: PropTypes.number,
};

TableHeader.defaultProps = {
  backgroundColor: '#FFF',
  headerHeight: 30,
};

export default TableHeader;
