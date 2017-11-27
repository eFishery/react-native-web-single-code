import React from 'react';
import PropTypes from 'prop-types';

import SidebarItem from './SidebarItem';

const style = {
  sidebar: { position: 'fixed', width: 250 },
  list: { listStyle: 'none' },
};

const Sidebar = ({ location, navigation }) => (
  <div style={style.sidebar}>
    <ul style={style.list}>
      <SidebarItem
        navigation={navigation}
        text="Home"
        icon="home"
        active={location.pathname === '/' ? true : false}
        routeLink="/"
      />
      <SidebarItem
        navigation={navigation}
        text="TableView"
        icon="table"
        active={location.pathname === '/table-view' ? true : false}
        routeLink="/table-view"
      />
    </ul>
  </div>
);

Sidebar.propTypes = {
  navigation: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Sidebar;
