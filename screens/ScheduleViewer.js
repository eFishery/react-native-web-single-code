import React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, Picker, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
// Relative imports
import ScheduleEntry from './utils/ScheduleEntry';
import Chart from './utils/Chart';
import Datatable from './utils/Datatable';

class ScheduleViewer extends React.Component {
  static navigationOptions = {
    title: 'Schedule Viewer',
    headerStyle: { marginTop: 24 },
  };

  constructor() {
    super();

    this.state = {
      viewState: 'view',
      metode: '',
      jumlahPakan: '',
      jadwal: []
    };

    this.headerJSON = [
      { key: 'name', title: 'Name' },
      { key: 'score', title: 'Score' },
    ];
    this.bodyJSON = [
      { name: 'test name 1', score: '100' },
      { name: 'test name 2', score: '50' },
      { name: 'test name 3', score: '75' },
    ];

    this.onChangeMethod = this.onChangeMethod.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeSchedule = this.onChangeSchedule.bind(this);
    this.onChangeScreen = this.onChangeScreen.bind(this);
  }

  onChangeMethod(metode) {
    this.setState({ metode });
  }

  onChangeAmount(jumlahPakan) {
    this.setState({ jumlahPakan });
  }

  onChangeSchedule() {

  }

  onChangeScreen() {
    const { navigate } = this.props.navigation;
    navigate('ScheduleManipulator');
  }

  render() {
    const { metode, jumlahPakan, jadwal } = this.state;

    return (
      <ScrollView style={styles.viewMargin}>
        <Button
          title="Manipulate Schedule"
          onPress={this.onChangeScreen}
        />
        <Text style={styles.inputMargin}>Metode Pemberian Pakan</Text>
        <Picker
          selectedValue={metode}
          onValueChange={this.onChangeMethod}
        >
          <Picker.Item label="Basic" value="basic" />
          <Picker.Item label="Advance" value="advance" />
          <Picker.Item label="Continuous" value="continuous" />
        </Picker>
        <Text style={styles.inputMargin}>Target Pakan</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Jumlah Pakan"
          onChangeText={this.onChangeAmount}
        />
        <ScheduleEntry
          entryNumber={1}
          timeStart={3600}
          timeEnd={7200}
          durationRun={3}
          durationPause={4}
          feedTarget={5}
        />
        <Datatable
          tableHeader={this.headerJSON}
          tableBody={this.bodyJSON}
          colFlexArray={[5,5,5]}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewMargin: {
    marginTop: 15,
  },
  inputMargin: {
    marginTop: 20,
    fontSize: 20
  }
});

export default ScheduleViewer;
