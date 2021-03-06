import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
// Relative imports
import { getEpoch, getHoursAndMinutes } from './helper/DateTimeHelper';

const styles = StyleSheet.create({
  scheduleTitle: {
    fontSize: 26,
  },
  viewFlex: {
    flexDirection: 'row',
    marginTop: 25,
  },
  buttonWidth: {
    width: 150,
  },
});

const ScheduleEntry = (props) => {
  const {
    entryNumber,
    timeStart,
    timeEnd,
    durationRun,
    durationPause,
    feedTarget,
  } = props;

  const utcStart = getEpoch(timeStart);
  const utcEnd = getEpoch(timeEnd);

  const { hours: timeStartHours, minutes: timeStartMinutes } = getHoursAndMinutes(utcStart);
  const { hours: timeEndHours, minutes: timeEndMinutes } = getHoursAndMinutes(utcEnd);

  return (
    <View style={styles.viewFlex}>
      <Text>{`${entryNumber}. `}</Text>
      <Text>{`${timeStartHours}:${timeStartMinutes} - `}</Text>
      <Text>{`${timeEndHours}:${timeEndMinutes}: `}</Text>
      <Text>{`${durationRun}'${durationPause}" [${feedTarget}]`}</Text>
    </View>
  );
};

ScheduleEntry.propTypes = {
  entryNumber: PropTypes.number.isRequired,
  timeStart: PropTypes.number.isRequired,
  timeEnd: PropTypes.number.isRequired,
  durationRun: PropTypes.number.isRequired,
  durationPause: PropTypes.number.isRequired,
  feedTarget: PropTypes.number.isRequired,
};

export default ScheduleEntry;
