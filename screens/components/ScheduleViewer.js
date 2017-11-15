import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';
import Button from './utils/component/Button';
import Entry from './Entry';
// Relative imports
// import {
//   headerJSON,
//   bodyJSON,
//   headingCellStyle,
//   bodyCellStyle,
//   filterTextStyle,
// } from './assets/Data';
// import Chart from './utils/Chart';
// import Datatable from './utils/Datatable';

const styles = StyleSheet.create({
  viewMargin: {
    marginTop: 15,
  },
  inputMargin: {
    marginTop: 20,
    fontSize: 20,
  },
});

class ScheduleViewer extends React.Component {
  onBackToLogin = () => {
    const { navigate } = this.props.screenProps.rootNavigation;
    navigate('Login');
  }

  onCounterChange = (action, currentCounter, id) => () => {
    const doAction = {
      increment: this.props.increment,
      decrement: this.props.decrement,
      reset: this.props.reset,
    };

    doAction[action](currentCounter, id);
  }

  render() {
    const entries = this.props.counter.reduce((all, cur) => {
      const { id, counter, sync } = cur;

      return all.concat(<Entry
        key={`${id}-entry-things`}
        marginTop={{ marginTop: 25 }}
        entryId={id}
        counter={counter}
        onCounterChange={this.onCounterChange}
        sync={sync}
      />);
    }, []);
    /*
        <Datatable
          tableHeader={this.headerJSON}
          tableBody={this.bodyJSON}
          keyName="test-table"
          colFlexArray={[5, 5, 5]}
          rowsPerPageOption={[5, 10, 15, 20]}
          hasFirstLast
          headingCellStyle={this.headingCellStyle}
          bodyCellStyle={this.bodyCellStyle}
          filterTextStyle={this.filterTextStyle}
        />
    */

    return (
      <ScrollView style={styles.viewMargin}>
        <Button title="Back bruh" onPress={this.onBackToLogin} />
        {entries}
      </ScrollView>
    );
  }
}

ScheduleViewer.propTypes = {
  // navigation: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  counter: PropTypes.array.isRequired,
  screenProps: PropTypes.object.isRequired,
};

export default ScheduleViewer;
