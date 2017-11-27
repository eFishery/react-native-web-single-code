import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from '../../components/modules/FontAwesome';

class SidebarItem extends React.Component {
  onNavigate = () => {
    const { navigation, routeLink } = this.props;

    navigation.navigate(routeLink);
  }

  render() {
    const { icon, text, active } = this.props;

    return (
      <button onClick={this.onNavigate}>
        <li>
          <FontAwesome name={icon} additionalClass="fa-fw" />
          <span>{text}</span>
        </li>
      </button>
    );
  }
}

SidebarItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  routeLink: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

SidebarItem.defaultProps = {
  active: false,
};

export default SidebarItem;
