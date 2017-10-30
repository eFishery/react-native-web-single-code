import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    key,
    onPress,
    style,
    title,
  } = props;

  return (
    <button
      key={key}
      onClick={onPress}
      style={style}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  key: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  title: '',
};

export default Button;
