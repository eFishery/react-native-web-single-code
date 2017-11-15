import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Button from './utils/component/Button';
import ef from './assets/efishery.png';

const style = StyleSheet.create({
  viewStyle: {
    // backgroundColor: '#26ba9a',
    flex: 1,
    padding: 10,
  },
  loginTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  loginImageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 80,
  },
});

class Login extends React.Component {
  onPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Home');
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <View style={style.loginImageContainerStyle}>
          <Image source={ef} />
        </View>
        <Text style={style.loginTextStyle}>Login</Text>
        <TextInput
          placeholder="Username"
          style={{ marginLeft: 15, marginRight: 15 }}
        />
        <TextInput
          placeholder="Password"
          style={{ marginLeft: 15, marginRight: 15 }}
        />
        <Button
          containerViewStyle={{ marginTop: 30 }}
          style={{ backgroundColor: '#588bd4' }}
          onPress={this.onPress}
          title="Login"
        />
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
