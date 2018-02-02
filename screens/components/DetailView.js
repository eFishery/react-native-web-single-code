import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Modal from './modules/Modal';
import Button from './modules/Button';
import Entry from './Entry';

const style = StyleSheet.create({
  viewStyle: {
    // backgroundColor: '#26ba9a',
    flex: 1,
    padding: 10,
  },
});

class DetailView extends React.Component {
  state = { modalVisible: false }

  onCounterChange = (action, currentCounter, id) => () => {
    const doAction = {
      increment: this.props.increment,
      decrement: this.props.decrement,
      reset: this.props.reset,
    };

    doAction[action](currentCounter, id);
  }

  onOpenModal = () => {
    this.setState({ modalVisible: true });
  }

  onRequestClose = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    const entries = this.props.counter.reduce((all, cur) => {
      const { id, counter, sync } = cur;

      return all.concat(<Entry
        key={`${id}-entry-things`}
        marginTop={{ marginTop: 25 }}
        entryId={id}
        counter={counter}
        onCounterChange={this.onCounterChange}
        sync={sync}
      />);
    }, []);

    return (
      <View style={style.viewStyle}>
        <Text>DetailView</Text>

        {entries}

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
          containerViewStyle={{ marginTop: 30 }}
          style={{ color: '#fff', backgroundColor: '#bbb' }}
          title="Show Modal"
          onPress={this.onOpenModal}
        />
      </View>
    );
  }
}

DetailView.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  counter: PropTypes.array.isRequired,
};

export default DetailView;
