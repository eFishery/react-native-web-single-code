import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const CustomModal = (props) => {
  const { isVisible, animationTiming, style, onRequestClose, contentLabel, children } = props;

  return (
    <Modal
      isOpen={isVisible}
      onRequestClose={onRequestClose}
      closeTimeoutMS={animationTiming}
      style={style}
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  );
};

CustomModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  animationTiming: PropTypes.number,
  style: PropTypes.object,
  contentLabel: PropTypes.string,
  children: PropTypes.element,
};

CustomModal.defaultProps = {
  isVisible: false,
  animationTiming: 300,
  style: {},
  contentLabel: '',
  children: null,
};

export default CustomModal;
