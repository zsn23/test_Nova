// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const Donut = () => {
//   const [state, setState] = React.useState({
//     series: [1210, 190, 480],
//     options: {
//       chart: {
//         width: 400, // Increased width
//         type: 'donut',
//       },
//       labels: ['Fraud prevention', 'Watchlist', ' Compliance rules'],
//       dataLabels: {
//         enabled: false, // Disable percentage inside the donut
//       },
//       legend: {
//         position: 'right',
//         offsetY: 20,
//         labels: {
//           colors: 'white',
//         },
//         formatter: function (label, opts) {
//           // Add series value next to the label
//           const value = opts.w.globals.series[opts.seriesIndex];
//           return `${label}: ${value}`;
//         },
//       },
//       stroke: {
//         show: false, // Disable borders
//         width: 0,    // Alternatively, set the width to 0
//       },
//       responsive: [{
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 265 // Reduced width for smaller screens
//           },
//           legend: {
//             position: 'bottom', // Keep legend at the bottom
//             fontSize: '8px', // Adjust legend font size
//             labels: {
//               colors: 'white', // Text color for legend labels on smaller screens
//             },
//             itemMargin: {
//               horizontal: 5,
//               vertical: 15
//             }
//           },
//           dataLabels: {
//             style: {
//               fontSize: '8px', // Smaller data label sizes for mobile
//               colors: ['white'], // Text color for data labels
//             }
//           }
//         }
//       }],
//     },
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart options={state.options} series={state.series} type="donut" width={400} />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// }

// export default Donut;



import React from "react";
import ReactApexChart from "react-apexcharts";

const Donut = () => {
  const [state, setState] = React.useState({
    series: [1010, 100, 380],
    options: {
      chart: {
        width: 400, // Increased width
        type: 'donut',
      },
      labels: ['Fraud prevention', 'Watchlist', 'Compliance rules'],
      colors: ['#003366', '#4318ff', '#0075ff'], // Custom colors for each label
      dataLabels: {
        enabled: false, // Disable percentage inside the donut
      },
      legend: {
        position: 'right',
        offsetY: 20,
        labels: {
          colors: 'white',
        },
        formatter: function (label, opts) {
          // Add series value next to the label
          const value = opts.w.globals.series[opts.seriesIndex];
          return `${label}: ${value}`;
        },
      },
      stroke: {
        show: true, // Enable borders
        width: 1, // Border width between slices
        colors: ['#FFFFFF'], // Border color (white in this case)
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 265, // Reduced width for smaller screens
            },
            legend: {
              position: 'bottom', // Keep legend at the bottom
              fontSize: '8px', // Adjust legend font size
              labels: {
                colors: 'white', // Text color for legend labels on smaller screens
              },
              itemMargin: {
                horizontal: 5,
                vertical: 15,
              },
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="donut" width={400} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Donut;
