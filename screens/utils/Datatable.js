import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import TableBody from './component/TableBody';
import TableHeader from './component/TableHeader';

class Datatable extends React.Component {
  render() {
    const { tableHeader, tableBody, colFlexArray } = this.props;

    return (
      <View style={styles.viewMargin}>
        <TableHeader
          colFlexArray={colFlexArray}
          backgroundColor="#DDD"
          headings={tableHeader}
        />
        <TableBody
          colFlexArray={colFlexArray}
          headings={tableHeader}
          arrayOfRows={tableBody}
        />
      </View>
    );
  }
}

Datatable.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  tableBody: PropTypes.array.isRequired,
  colFlexArray: PropTypes.array,
};

Datatable.defaultProps = {
  colFlexArray: [1, 1, 1],
};

const styles = StyleSheet.create({
  viewMargin: {
    marginTop: 15,
  },
});

export default Datatable;
