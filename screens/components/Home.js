import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Button from './modules/Button';
import getScreenWidth from './helper/ResponsiveHelper';
import { fcrAdgData, waterQualityData } from './assets/Data';
import FcrAdgSlider from './FcrAdgSlider';
import WaterQualitySlider from './WaterQualitySlider';
import Chart from './Chart';
import routes from '../routers/routes';

const styles = StyleSheet.create({
  viewStyle: {
    // backgroundColor: '#26ba9a',
    flex: 1,
    padding: 15,
  },
  viewPageTitle: {
    marginBottom: 15,
  },
  pageTitle: {
    fontWeight: '700',
  },
  sectionTitle: {
    fontWeight: '700',
  },
});

class Home extends React.Component {
  constructor() {
    super();

    const {
      width,
      // text
    } = getScreenWidth();

    this.state = {
      screenSizeWidth: width,
      // screenSizeText: text,
    };
  }

  onLayout = () => {
    const {
      width,
      // text
    } = getScreenWidth();
    this.setState({
      screenSizeWidth: width,
      // screenSizeText: text,
    });
  }

  onLogout = () => {
    const { navigation, logout } = this.props;
    navigation.navigate(routes.login);
    logout();
  }

  render() {
    return (
      <ScrollView onLayout={this.onLayout} style={styles.viewStyle}>
        <View style={styles.viewPageTitle}>
          <Text style={styles.sectionTitle}>Home</Text>
        </View>

        <Text style={styles.sectionTitle}>FCR dan ADG</Text>
        <FcrAdgSlider width={this.state.screenSizeWidth} data={fcrAdgData} />

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Chart width={this.state.screenSizeWidth * 0.75} />
        </View>

        <Text style={styles.sectionTitle}>Kualitas Air Terabru</Text>
        <WaterQualitySlider width={this.state.screenSizeWidth} data={waterQualityData} />

        <Button title="Logout" onPress={this.onLogout} />
      </ScrollView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Home;
