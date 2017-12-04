import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import 'font-awesome/css/font-awesome.css';

const FontAwesome = ({ name, size, color, additionalClass, additionaStyle }) => {
  const faIconString = `fa-${name}`;
  const faClass = classNames({
    fa: true,
    [`${faIconString} ${additionalClass}`]: true,
  });
  const props = {
    className: faClass,
    'aria-hidden': true,
    style: {
      color: `${color}`,
      'fontSize': `${size}px`,
      ...additionaStyle,
    },
  };

  return (
    <i {...props} />
  );
};

FontAwesome.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  additionalClass: PropTypes.string,
  additionalStyle: PropTypes.object,
};

FontAwesome.defaultProps = {
  size: 12,
  color: '#000',
  additionalClass: '',
  additionalStyle: {},
};

export default FontAwesome;
