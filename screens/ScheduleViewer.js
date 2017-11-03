import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, Text } from 'react-native';
import CheckBox from './utils/component/CheckBox';
// Relative imports
// import Chart from './utils/Chart';
import checkConnection from './utils/helper/CheckConnection';
import Datatable from './utils/Datatable';

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
  // static navigationOptions = {
  //   title: 'Schedule Viewer',
  //   headerStyle: { marginTop: 24 },
  // };

  constructor() {
    super();

    setInterval(
      () => {
        checkConnection()
          .then(({ type, effectiveType }) => {
            this.setState({ isOnline: true });
          })
          .catch(({ response, request }) => {
            if (request && !response) {
              // If request is present but response is undefined
              // This handles the case of CORS errors or network not found
              this.setState({ isOnline: false });
            }
          });
      },
      5000,
    );

    const firstNames = [
      'Aaren',
      'Aarika',
      'Abagael',
      'Abagail',
      'Abbe',
      'Abbey',
      'Abbi',
      'Abbie',
      'Abby',
      'Abbye',
      'Abigael',
      'Abigail',
      'Abigale',
      'Abra',
      'Ada',
      'Adah',
      'Adaline',
      'Adan',
      'Adara',
      'Adda',
    ];
    const lastNames = [
      'Aaberg',
      'Aalst',
      'Aara',
      'Aaren',
      'Aarika',
      'Aaron',
      'Aaronson',
      'Ab',
      'Aba',
      'Abad',
      'Abagael',
      'Abagail',
      'Abana',
      'Abate',
      'Abba',
      'Abbate',
      'Abbe',
      'Abbey',
      'Abbi',
      'Abbie',
    ];

    this.headerJSON = [
      { key: 'checkbox', title: 'Checkbox', checkbox: true },
      {
        key: 'name', title: 'Name', sortable: true, filterable: true,
      },
      { key: 'score', title: 'Score', sortable: true },
    ];
    this.bodyJSON = [];

    for (let i = 0; i < 50; i += 1) {
      const firstNameIdx = Math.floor(Math.random() * 20);
      const lastNameIdx = Math.floor(Math.random() * 20);

      this.bodyJSON.push({
        name: `${firstNames[firstNameIdx]} ${lastNames[lastNameIdx]}`,
        score: Math.floor(Math.random() * 101),
        _checkable: Math.floor(Math.random() * 2) === 0,
      });
    }

    this.headingCellStyle = { padding: 5, backgroundColor: '#DDD' };
    this.bodyCellStyle = { padding: 5 };
    this.filterTextStyle = { height: 40 };

    this.onChangeScreen = this.onChangeScreen.bind(this);

    this.state = { isOnline: true };
  }

  onChangeScreen() {
    const { navigate } = this.props.navigation;
    navigate('ScheduleManipulator');
  }

  render() {
    const onlineText = this.state.isOnline ? 'online' : 'offline';

    return (
      <ScrollView style={styles.viewMargin}>
        <Text>{onlineText}</Text>
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
      </ScrollView>
    );
  }
}

ScheduleViewer.propTypes = {
  // navigation: PropTypes.object.isRequired,
};

export default ScheduleViewer;
