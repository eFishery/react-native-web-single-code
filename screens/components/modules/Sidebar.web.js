import React from 'react';
import PropTypes from 'prop-types';

import SidebarItem from './SidebarItem';

const style = {
  sidebar: { position: 'fixed', width: 250 },
  list: { listStyle: 'none', padding: 0 },
};

const isActive = (paths, currentPath) => {
  if (Array.isArray(paths)) {
    return paths.includes(currentPath);
  }

  return paths === currentPath;
};

const Sidebar = ({ location, navigation }) => (
  <div style={style.sidebar}>
    <ul style={style.list}>
      <SidebarItem
        navigation={navigation}
        text="Home"
        icon="home"
        active={isActive('/', location.pathname)}
        routeLink="/"
      />
      <SidebarItem
        navigation={navigation}
        text="TableView"
        icon="table"
        active={isActive(['/table-view', '/detail-view'], location.pathname)}
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
