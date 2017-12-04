import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
// Relative imports
// import { getScreenDimension } from './helper/ResponsiveHelper';

const styles = StyleSheet.create({
  numberBoxes: {
    flex: 1,
    flexDirection: 'row',
  },
  numberBoxValue: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
  },
  numberBoxName: {
    textAlign: 'center',
    fontSize: 20,
  },
});

const WaterQualitySlider = ({ data, width }) => {
  const slicedData = data.slice(0, 5);
  const boxes = slicedData.reduce((array, curElement, curIdx) => {
    const { prop, value, name } = curElement;
    const boxHeight = (width - 30) / 5;
    const nextEl = (
      <View
        key={`box-slider-${curIdx + 1}`}
        style={{
              height: boxHeight,
              flex: 1,
              borderWidth: 1,
              borderColor: '#000',
              padding: 5,
            }}
      >
        <View style={{ marginBottom: boxHeight * 0.2 }}>
          <Text>{prop.toUpperCase()}</Text>
        </View>
        <Text style={styles.numberBoxValue}>{value}</Text>
        <Text style={styles.numberBoxName}>{name}</Text>
      </View>
    );

    return array.concat(nextEl);
  }, []);

  return <View style={styles.numberBoxes}>{boxes}</View>;
};

WaterQualitySlider.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
};

export default WaterQualitySlider;
