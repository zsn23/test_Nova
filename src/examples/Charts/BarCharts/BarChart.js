

// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class BarChart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chartData: [],
//       chartOptions: {},
//     };
//   }

//   componentDidMount() {
//     const { barChartData, barChartOptions } = this.props;

//     this.setState({
//       chartData: barChartData,
//       chartOptions: barChartOptions,
//     });
//   }

//   render() {
//     return (
//       <Chart
//         options={this.state.chartOptions}
//         series={this.state.chartData}
//         type="bar"
//         width="100%"
//         height="100%"
//       />
//     );
//   }
// }

// export default BarChart;


import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.barChartData || [], // Set default to prevent undefined
      chartOptions: props.barChartOptions || {}, // Set default to prevent undefined
    };
  }

  componentDidMount() {
    const { barChartData, barChartOptions } = this.props;

    // Validate and update state only if props are valid
    if (barChartData && barChartOptions) {
      this.setState({
        chartData: barChartData,
        chartOptions: barChartOptions,
      });
    } else {
      console.error("Invalid chart data or options passed to BarChart.");
    }
  }

  render() {
    const { chartData, chartOptions } = this.state;

    // Prevent rendering if data or options are not ready
    if (!chartData.length || !Object.keys(chartOptions).length) {
      return <div>Loading chart...</div>;
    }

    return (
      <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default BarChart;
