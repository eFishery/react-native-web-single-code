import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './web/Navbar';
import Sidebar from './web/Sidebar';

const PageLayout = ({ children, ...props }) => (
  <div className="full-height">
    <Navbar {...props} />
    <div>
      <Sidebar {...props} />
      <div style={{ marginLeft: 250, marginTop: 50 }}>
        {children}
      </div>
    </div>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.element,
};

PageLayout.defaultProps = {
  children: null,
};

export default PageLayout;
