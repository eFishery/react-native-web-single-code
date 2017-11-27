import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

const CustomModal = ({ isVisible, animationTiming, style, onRequestClose, children }) => (
  <Modal
    isVisible={isVisible}
    animationInTiming={animationTiming}
    animationOutTiming={animationTiming}
    style={style}
    onBackButtonPress={onRequestClose}
    onBackdropPress={onRequestClose}
  >
    {children}
  </Modal>
);

CustomModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  animationTiming: PropTypes.number,
  style: PropTypes.object,
  contentLabel: PropTypes.string,
  children: PropTypes.element,
};

CustomModal.defaultProps = {
  visible: false,
  animationTiming: 300,
  style: {},
  contentLabel: '',
  children: null,
};

export default CustomModal;
