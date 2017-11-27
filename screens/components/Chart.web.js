import React from 'react';
// import PropTypes from 'prop-types';

import ChartjsWrapper from './ChartjsWrapper';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const generateDatasets = () => {
  const datasets = [];

  for (let i = 0; i < 4; i += 1) {
    const color = getRandomColor();

    datasets.push({
      label: `Quarter ${i + 1}`,
      data: [(Math.random() * 10000) + 10000],
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
    });
  }

  return datasets;
};

const generateOptions = () => ({
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'This Years\' Earnings',
  },
  legend: {
    position: 'bottom',
    display: true,
  },
  scales: {
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Quarter',
        fontStyle: 'bold',
      },
    }],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Earnings',
        fontStyle: 'bold',
      },
    }],
  },
});

const generateData = () => ({
  labels: ['PT Ilalang'],
  datasets: generateDatasets(),
});

// class BarChart extends React.Component {
  // generateDatasets() {
  //   const datasets = [];

  //   // datasets: array of object, property label and data
  //   // this.props.datasets.forEach((dataset, i) => {
  //   //   const color = this.props.arrayOfColor !== undefined ?
  //   //     this.props.arrayOfColor[i] : BarChart.getRandomColor();

  //   //   datasets.push({
  //   //     label: dataset.label,
  //   //     data: dataset.data,
  //   //     backgroundColor: color,
  //   //     borderColor: color,
  //   //     borderWidth: 1,
  //   //   });
  //   // });

  //   for (let i = 0; i < 4; i += 1) {
  //     const color = BarChart.getRandomColor();

  //     datasets.push({
  //       label: `Quarter ${i + 1}`,
  //       data: [(Math.random() * 10000) + 10000],
  //       backgroundColor: color,
  //       borderColor: color,
  //       borderWidth: 1,
  //     });
  //   }

  //   return datasets;
  // }

  // generateData() {
  //   return {
  //     labels: ['PT Ilalang'],
  //     // datasets: this.generateDatasets(),
  //     datasets: generateDatasets(),
  //   };
  // }

  // generateOptions() {
  //   // return {
  //   //   maintainAspectRatio: false,
  //   //   title: {
  //   //     display: true,
  //   //     text: this.props.chartTitle,
  //   //   },
  //   //   legend: {
  //   //     position: 'bottom',
  //   //     display: this.props.displayLegend,
  //   //   },
  //   //   scales: {
  //   //     xAxes: [{
  //   //       scaleLabel: {
  //   //         display: true,
  //   //         labelString: this.props.xAxisTitle,
  //   //         fontStyle: 'bold',
  //   //       },
  //   //     }],
  //   //     yAxes: [{
  //   //       scaleLabel: {
  //   //         display: true,
  //   //         labelString: this.props.yAxisTitle,
  //   //         fontStyle: 'bold',
  //   //       },
  //   //     }],
  //   //   },
  //   // };

  //   return {
  //     maintainAspectRatio: false,
  //     title: {
  //       display: true,
  //       text: 'This Years\' Earnings',
  //     },
  //     legend: {
  //       position: 'bottom',
  //       display: true,
  //     },
  //     scales: {
  //       xAxes: [{
  //         scaleLabel: {
  //           display: true,
  //           labelString: 'Quarter',
  //           fontStyle: 'bold',
  //         },
  //       }],
  //       yAxes: [{
  //         scaleLabel: {
  //           display: true,
  //           labelString: 'Earnings',
  //           fontStyle: 'bold',
  //         },
  //       }],
  //     },
  //   };
  // }

//   render() {
//     return (
//       <div>
//         <ChartjsWrapper
//           data={generateData()}
//           options={generateOptions()}
//           type="bar"
//         />
//       </div>
//     );
//   }
// }

const BarChart = () => (
  <div>
    <ChartjsWrapper
      data={generateData()}
      options={generateOptions()}
      type="bar"
    />
  </div>
);

BarChart.propTypes = {
  // datasets: PropTypes.arrayOf(PropTypes.object).isRequired,
  // xAxisTitle: PropTypes.string.isRequired,
  // labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  // yAxisTitle: PropTypes.string.isRequired,
  // chartTitle: PropTypes.string.isRequired,
  // displayLegend: PropTypes.bool.isRequired,
  // arrayOfColor: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BarChart;
