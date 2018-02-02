import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    onPress,
    style,
    title,
    containerViewStyle,
  } = props;

  return (
    <button
      onClick={onPress}
      style={{ ...containerViewStyle, ...style }}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  title: '',
};

export default Button;
