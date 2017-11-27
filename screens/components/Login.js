import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Button from './modules/Button';
import ef from './assets/efishery.png';
// import getScreenWidth from './helper/ResponsiveHelper';
import routes from '../routers/routes';

const style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#c1c3c8',
    flex: 1,
    paddingHorizontal: '16.5%',
    height: '100%',
  },
  loginTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  loginImageContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
  },
  formContainerStyle: {
    flex: 2,
  },
  headerImage: {
    opacity: 1,
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  textInput: {
    padding: 5,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    alignItems: 'stretch',
  },
});

class Login extends React.Component {
  // constructor() {
  //   super();

  // this.state = { screenSizeText: getScreenWidth().text };
  // }

  onPress = () => {
    const { navigation, login } = this.props;
    navigation.navigate(routes.drawer);
    login();
  }

  onLayout = () => {
    // this.setState({ screenSizeText: getScreenWidth().text });
  }

  render() {
    return (
      <View onLayout={this.onLayout} style={style.viewStyle}>
        <View style={style.loginImageContainerStyle}>
          <Image source={ef} style={style.headerImage} />
        </View>
        <View style={style.formContainerStyle}>
          <Text style={style.loginTextStyle}>Login</Text>
          <TextInput
            placeholder="Username"
            style={style.textInput}
          />
          <TextInput
            placeholder="Password"
            style={style.textInput}
          />
          <Button
            containerViewStyle={{ marginTop: 30 }}
            style={{ backgroundColor: '#588bd4' }}
            onPress={this.onPress}
            title="Login"
          />
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
