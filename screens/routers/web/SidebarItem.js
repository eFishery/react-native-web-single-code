import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from '../../components/modules/FontAwesome';

const baseButtonStyle = {
  border: 0,
  padding: '10px 15px',
  backgroundColor: 'transparent',
  width: '100%',
  cursor: 'pointer',
  textAlign: 'left',
};
const listItem = {};
const activeListItem = { backgroundColor: '#ddd' };

class SidebarItem extends React.Component {
  onNavigate = () => {
    const { navigation, routeLink } = this.props;

    navigation.navigate(routeLink);
  }

  render() {
    const { icon, text, active } = this.props;

    return (
      <li style={active ? activeListItem : listItem}>
        <button style={baseButtonStyle} onClick={this.onNavigate}>
          <FontAwesome name={icon} additionalClass="fa-fw" />
          <span style={{ marginLeft: 10 }}>{text}</span>
        </button>
      </li>
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
