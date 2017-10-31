import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    onPress,
    style,
    title,
  } = props;

  return (
    <button
      onClick={onPress}
      style={style}
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
