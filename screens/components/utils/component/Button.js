import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-native-elements/src/buttons/Button';

const btn = props => {
  return (<Button {...props} />)
};

btn.propTypes = {
  onPress: PropTypes.func.isRequired,
  raised: PropTypes.bool,
  style: PropTypes.object,
  title: PropTypes.string,
  containerViewStyle: PropTypes.object,
};

btn.defaultProps = {
  raised: false,
  style: {},
  title: '',
  containerViewStyle: {},
};

export default btn;
