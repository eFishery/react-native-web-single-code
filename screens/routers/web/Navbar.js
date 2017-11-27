import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome from '../../components/modules/FontAwesome';

const style = {
  navbar: {
    position: 'fixed',
    height: 30,
    width: '100%',
    top: 0,
    backgroundColor: '#26ba9a',
    zIndex: 4,
    padding: 10
  },
  navbarBrand: { width: 250 },
  inlineBlock: { display: 'inline-block' },
  toggleButton: { backgroundColor: 'transparent', borderWidth: 0 }
};

const Navbar = (props) => (
  <div style={style.navbar}>
    <div style={style.navbarBrand}>
      <div style={style.inlineBlock}>
        eFishery
      </div>
      <button style={style.toggleButton}>
        <FontAwesome
          name="bars"
          size={20}
          color="#fff"
          additionalClass="fa-fw"
        />
      </button>
    </div>
  </div>
);

Navbar.propTypes = {};

export default Navbar;
