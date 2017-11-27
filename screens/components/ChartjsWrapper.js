import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

class ChartjsWrapper extends React.Component {
  componentDidMount() {
    const chartCanvas = this.chart;

    this.myChart = new Chart(chartCanvas, {
      type: this.props.type,
      data: this.props.data,
      options: this.props.options,
    });
  }

  componentDidUpdate() {
    const chart = this.myChart;
    const { data } = this.props;

    if (data.datasets.length >= chart.data.datasets.length) {
      // If event action is add or delete partially
      data.datasets.forEach((dataset, i) => {
        if (chart.data.datasets[i] !== undefined) {
          chart.data.datasets[i].data = dataset.data;
          chart.data.datasets[i].pointBorderColor = dataset.color;
          chart.data.datasets[i].pointBackgroundColor = dataset.color;
        } else {
          chart.data.datasets.push(dataset);
        }
      });
    } else {
      // If event action is delete whole label in the plotted area
      const newDataTags = data.datasets.reduce((acc, val) => acc.concat(val.label), []);
      const chartDataTags = chart.data.datasets.reduce((acc, val) => acc.concat(val.label), []);
      const newDatasets = [];

      data.datasets.forEach((dataset) => {
        if (newDataTags.includes(dataset.label) && chartDataTags.includes(dataset.label)) {
          newDatasets.push(dataset);
        }
      });

      chart.data.datasets = newDatasets;
    }

    chart.data.labels = data.labels;
    chart.update();
  }

  render() {
    return (
      <canvas
        ref={(ref) => {
          this.chart = ref;
        }}
        height="400"
        width="600"
      />
    );
  }
}

ChartjsWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
};

export default ChartjsWrapper;
