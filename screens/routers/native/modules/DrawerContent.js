import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  btnSubmit: {
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#26ba9a',
  },
  spinnerViewBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    opacity: 0.5,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 10,
  },
  drawerItemTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  drawerItemTitleText: {
    fontWeight: 'bold',
  },
});

class DrawerContent extends React.Component {
  onItemPress = (item) => () => {
    const { navigation } = this.props;

    navigation.navigate(item);
  }

  render() {
    const { navigation, drawerItemsTitle } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.drawerItemTitle}>
          <Text style={styles.drawerItemTitleText}>{drawerItemsTitle}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={this.onItemPress('Home')}>
            <Text>Homey</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={this.onItemPress('TableView')}>
            <Text>TableView</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spinnerViewBg}>
          <View style={styles.spinner}>
            <ActivityIndicator
              size="small"
              animating
            />
          </View>
        </View>
      </View>
    );
  }
}

export default DrawerContent;
