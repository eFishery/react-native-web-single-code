import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const style = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
  navbar: {
    flex: 1,
  },
  body: {
    flex: 5,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
  },
  content: {
    flex: 4,
  },
});

const Page = ({ navigation, children }) => {
  const clonedChildren = React.cloneElement(children, navigation);

  return (
    <View style={style.page}>
      <View style={style.navbar}>
        <Navbar navigation={navigation} />
      </View>
      <View style={style.body}>
        <Sidebar style={style.sidebar} navigation={navigation} />
        {clonedChildren}
      </View>
    </View>
  );
};

Page.propTypes = {
  navigation: PropTypes.object,
  children: PropTypes.children,
};

export default Page;
