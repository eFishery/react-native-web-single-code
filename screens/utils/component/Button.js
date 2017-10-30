import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-native-elements/src/buttons/Button';

const Button = props => (<Button {...props} />);

Button.propTypes = {
  key: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  raised: PropTypes.bool,
  style: PropTypes.object,
  title: PropTypes.string,
  containerViewStyle: PropTypes.object,
};

Button.defaultProps = {
  raised: false,
  style: {},
  title: '',
  containerViewStyle: {},
};

export default Button;
