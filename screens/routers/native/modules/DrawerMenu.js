import React from 'react';
import PropTypes from 'prop-types';

import NavbarItem from './NavbarItem';

class DrawerMenu extends React.Component {
  onDrawerNavigate = () => {
    const { navigation } = this.props;

    if (navigation.state.index === 0) {
      navigation.navigate('DrawerOpen');
    } else {
      navigation.navigate('DrawerClose');
    }
  }

  render() {
    return (
      <NavbarItem
        iconName="bars"
        onPress={this.onDrawerNavigate}
      />
    );
  }
}

DrawerMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DrawerMenu;
