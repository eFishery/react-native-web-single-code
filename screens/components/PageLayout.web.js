import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './modules/Navbar.web';
import Sidebar from './modules/Sidebar.web';

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
