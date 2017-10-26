import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  viewMargin: {
    marginTop: 15,
  },
  inputMargin: {
    marginTop: 20,
    fontSize: 20,
  },
});

class ScheduleManipulator extends React.Component {
  static navigationOptions = {
    title: 'Schedule Manipulator',
    headerStyle: { marginTop: 24 },
  };

  constructor() {
    super();

    this.onChangeScreen = this.onChangeScreen.bind(this);
  }

  onChangeScreen() {
    const { navigate } = this.props.navigation;

    navigate('Home');
  }

  render() {
    return (
      <View style={styles.viewMargin}>
        <Text style={styles.inputMargin}>Metode Pemberian Pakan</Text>
        <Button
          title="Kembali ke Halaman Sebelumnya"
          onPress={this.onChangeScreen}
        />
      </View>
    );
  }
}

ScheduleManipulator.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ScheduleManipulator;
