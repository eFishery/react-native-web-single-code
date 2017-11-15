import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import Button from '../../components/utils/component/Button';

const style = StyleSheet.create({
  sidebar: {
    flex: 1,
    flexDirection: 'column',
  },
});

class Sidebar extends React.Component {
  onBackPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  render() {
    return (
      <View style={style.sidebar}>
        <View>
          <Button
            title="Back Sidebar"
            onPress={this.onBackPress}
          />
        </View>
      </View>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
