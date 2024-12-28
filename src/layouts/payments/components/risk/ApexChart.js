// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const ApexChart = () => {
//   const [state, setState] = React.useState({
//     series: [
//       {
//         data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//       },
//       {
//         data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//       },
//       {
//         data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
//       },
//     ],
//     options: {
//       chart: {
//         type: "bar",
//         height: 350,
//         toolbar: {
//           show: false, // Optional: hides the toolbar
//         },
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: "55%",
//           borderRadius: 5,
//           borderRadiusApplication: "end",
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ["transparent"],
//       },
//       xaxis: {
//         categories: ["2024-11-12","","","","","","","","2025-11-12"],
//         labels: {
//           style: {
//             colors: "#FFFFFF", // White color for categories
//             fontSize: "12px",
//           },
//         },
//       },
//       yaxis: {
//         labels: {
//           style: {
//             colors: "#FFFFFF", // White color for data labels
//             fontSize: "12px",
//           },
//         },
//         title: {
//           style: {
//             color: "#FFFFFF", // White color for the title
//             fontSize: "14px",
//           },
//         },
//       },
//       fill: {
//         opacity: 1,
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return "$ " + val + " thousands";
//           },
//         },
//       },
//       legend: {
//         labels: {
//           colors: "#FFFFFF", // White color for the legend text
//           useSeriesColors: false, // Ensures custom color is used
//         },
//       },
//       grid: {
//         borderColor: "#444", // Optional: makes gridlines more subtle
//       },
//     },
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
//       </div>
//     </div>
//   );
// };

// export default ApexChart;





import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false, // Optional: hides the toolbar
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["2024-11-12","","","","","","","","2025-11-12"],
        labels: {
          style: {
            colors: "#FFFFFF", // White color for categories
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#FFFFFF", // White color for data labels
            fontSize: "12px",
          },
        },
        title: {
          style: {
            color: "#FFFFFF", // White color for the title
            fontSize: "14px",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      legend: {
        labels: {
          colors: "#FFFFFF", // White color for the legend text
          useSeriesColors: false, // Ensures custom color is used
        },
      },
      grid: {
        borderColor: "#444", // Optional: makes gridlines more subtle
      },
      colors: ["#4394E5", "#4318ff", "#92C5F9"], // Custom colors for each bar series
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default ApexChart;
