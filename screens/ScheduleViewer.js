import React from 'react';
import { StyleSheet, Text, TextInput, View, Picker, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
// Relative imports
import ScheduleEntry from './utils/ScheduleEntry';

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
      <View style={styles.viewMargin}>
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
      </View>
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
