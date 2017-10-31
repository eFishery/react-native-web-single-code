import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ onPress, checked }) => {
  return (<input type="checkbox" onClick={onPress} checked={checked} />)
};

CheckBox.propTypes = {
  onPress: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

CheckBox.defaultProps = {
  checked: false,
};

export default CheckBox;
