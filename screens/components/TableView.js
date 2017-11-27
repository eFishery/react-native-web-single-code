import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import {
  headerJSON,
  bodyJSON,
  headingCellStyle,
  bodyCellStyle,
  filterTextStyle,
} from './assets/Data';
import Datatable from './Datatable';
import routes from '../routers/routes';

const style = StyleSheet.create({
  viewStyle: {
    // backgroundColor: '#26ba9a',
    flex: 1,
    padding: 10,
  },
});

class TableView extends React.Component {
  onPress = () => {
    this.props.navigation.navigate(routes.detailView);
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <Text>TableView</Text>

        <Datatable
          tableHeader={headerJSON(this.onPress)}
          tableBody={bodyJSON}
          keyName="test-keyname"
          colFlexArray={[5, 5, 5, 5]}
          hasFirstLast
          headingCellStyle={headingCellStyle}
          bodyCellStyle={bodyCellStyle}
          filterTextStyle={filterTextStyle}
        />
      </View>
    );
  }
}

TableView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TableView;
