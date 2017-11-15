import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import Button from '../../components/utils/component/Button';

const style = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: 'row',
  },
  navbarLeft: {
    flex: 1,
  },
  navbarCenter: {
    flex: 2,
  },
  navbarRight: {
    flex: 1,
  },
});

class Navbar extends React.Component {
  onBackPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  render() {
    return (
      <View style={style.navbar}>
        <View style={style.navbarLeft}>
          <Button
            title="Back"
            onPress={this.onBackPress}
          />
        </View>
        <View style={style.navbarCenter}><Text>qwer</Text></View>
        <View style={style.navbarRight}><Text>zxcv</Text></View>
      </View>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
