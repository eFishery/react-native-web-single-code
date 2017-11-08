import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

const FontAwesome = ({ name, size, color }) => {
  const faIconString = `fa-${name}`;
  const faClass = classNames({
    fa: true,
    [`${faIconString}`]: true,
  });
  const props = {
    className: faClass,
    'aria-hidden': true,
    style: {
      color: `${color}`,
      'fontSize': `${size}px`,
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
};

FontAwesome.defaultProps = {
  size: 12,
  color: '#000',
};

export default FontAwesome;
