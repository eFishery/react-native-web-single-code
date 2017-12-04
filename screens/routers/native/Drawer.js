import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerNavigator, addNavigationHelpers } from 'react-navigation';
import Home from '../../containers/Home';
import TableView from '../../components/TableView';
import DetailView from '../../components/DetailView';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions } from './utils/NavUtil';
import DrawerMenu from './modules/DrawerMenu';
import DrawerContent from './modules/DrawerContent';

const getDrawerIcon = (iconName, tintColor) => (
  <Icon name={iconName} size={20} color={tintColor} />
);

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const tableDrawerIcon = ({ tintColor }) => getDrawerIcon('table', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Home', '#26ba9a', 'white', homeDrawerIcon);
const tableNavOptions = getDrawerNavigationOptions('TableView', '#26ba9a', 'white', tableDrawerIcon);
const drawerNavOptions = getDrawerNavigationOptions('DetailView', '#26ba9a', 'white', undefined);

const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: homeNavOptions
  },
  TableView: { screen: TableView, navigationOptions: tableNavOptions },
  DetailView: { screen: DetailView, navigationOptions: { ...drawerNavOptions, drawerLabel: () => null } },
}, {
  drawerWidth: 300,
  drawerPosition: 'left',
  initialRouteName: 'Home',
  // contentComponent: (props) => <DrawerContent {...props} />
});

Drawer.navigationOptions = ({navigation}) => getNavigationOptionsWithAction(
  'TestDrawer',
  '#26ba9a',
  '#000',
  <DrawerMenu navigation={navigation} />,
);

export default Drawer;
