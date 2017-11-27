import React from 'react';
import PropTypes from 'prop-types';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer } from 'victory-native';

const Chart = ({ width }) => {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  return (
    <VictoryChart
      containerComponent={(
        <VictoryContainer responsive />
      )}
      width={width}
    >
      <VictoryAxis
        tickValues={[0, 1, 2, 3, 4]}
        tickFormat={['', 'Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={x => (`$${x / 1000}k`)}
      />
      <VictoryBar
        style={{
          data: { fill: 'rgba(0,255,0,0.5)' },
        }}
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>
  );
};

Chart.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Chart;
