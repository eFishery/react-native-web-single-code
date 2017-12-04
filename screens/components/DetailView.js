import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Modal from './modules/Modal';
import Button from './modules/Button';

const style = StyleSheet.create({
  viewStyle: {
    // backgroundColor: '#26ba9a',
    flex: 1,
    padding: 10,
  },
});

class DetailView extends React.Component {
  state = { modalVisible: false }

  onOpenModal = () => {
    this.setState({ modalVisible: true });
  }

  onRequestClose = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <Text>DetailView</Text>

        <Modal
          isVisible={this.state.modalVisible}
          animationTiming={300}
          onRequestClose={this.onRequestClose}
          style={{ backgroundColor: '#fff' }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>
              <Button
                style={{ color: '#fff', backgroundColor: '#bbb' }}
                title="Hide Modal"
                onPress={this.onRequestClose}
              />
            </View>
          </View>
        </Modal>

        <Button
          style={{ color: '#fff', backgroundColor: '#bbb' }}
          title="Show Modal"
          onPress={this.onOpenModal}
        />
      </View>
    );
  }
}

DetailView.propTypes = {
  // navigation: PropTypes.object.isRequired,
};

export default DetailView;
