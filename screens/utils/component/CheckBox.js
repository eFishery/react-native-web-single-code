import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'react-native-elements/src/checkbox/CheckBox';

const cb = (props) => <CheckBox {...props} />;

cb.propTypes = {
  onPress: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
  size: PropTypes.number,
  uncheckedColor: PropTypes.string,
  checked: PropTypes.bool,
};

cb.defaultProps = {
  containerStyle: {},
  size: 12,
  uncheckedColor: '#000',
  checked: false,
};

export default cb;
