import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Button from './modules/Button';

const Entry = ({
  marginTop, counter, onCounterChange, entryId, sync,
}) => (
  <View style={marginTop}>
    <Text>{counter} | {sync ? 'Sync' : 'Not Sync'}</Text>
    <Button
      title="increment"
      onPress={onCounterChange('increment', counter, entryId)}
    />
    <Button
      title="decrement"
      onPress={onCounterChange('decrement', counter, entryId)}
    />
    <Button
      title="reset"
      onPress={onCounterChange('reset', counter, entryId)}
    />
  </View>
);

Entry.propTypes = {
  marginTop: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  entryId: PropTypes.number.isRequired,
  onCounterChange: PropTypes.func.isRequired,
  sync: PropTypes.bool.isRequired,
};

export default Entry;
