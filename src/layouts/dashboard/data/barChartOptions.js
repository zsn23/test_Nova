export const barChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
    background: "transparent",
  },
  tooltip: {
    style: {
      fontSize: "10px",
      fontFamily: "Plus Jakarta Display",
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["16-20", "21-25", "26-30", "31-35", "36-42", "42+" ," 50-65"," 60-75"," 80-9 5"],
    labels: {
      show: true,
      style: {
        colors: "#ffffff",
        fontSize: "12px",
        fontFamily: "Plus Jakarta Display",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: "#ffffff",
        fontSize: "12px",
        fontFamily: "Plus Jakarta Display",
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#555",
    strokeDashArray: 4, // Dashed grid lines
  },
  fill: {
    colors: ["#4A90E2"], // Blue bar color
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: "40%", // Adjust width for better appearance
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 3,
            columnWidth: "30%",
          },
        },
      },
    },
  ],
};

// export const barChartOptionsDashboard = {
//   chart: {
//     toolbar: {
//       show: false,
//     },
//   },
//   tooltip: {
//     style: {
//       fontSize: "10px",
//       fontFamily: "Plus Jakarta Display",
//     },
//     onDatasetHover: {
//       style: {
//         fontSize: "10px",
//         fontFamily: "Plus Jakarta Display",
//       },
//     },
//     theme: "dark",
//   },
//   xaxis: {
//     categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//     show: true,
//     labels: {
//       show: true,
//       style: {
//         colors: "#fff",
//         fontSize: "10px",
//       },
//     },
//     axisBorder: {
//       show: true,
//     },
//     axisTicks: {
//       show: true,
//     },
//   },
//   yaxis: {
//     show: true,
//     color: "#fff",
//     labels: {
//       show: true,
//       style: {
//         colors: "#fff",
//         fontSize: "10px",
//         fontFamily: "Plus Jakarta Display",
//       },
//     },
//   },
//   grid: {
//     show: false,
//   },
//   fill: {
//     colors: "#fff",
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   plotOptions: {
//     bar: {
//       borderRadius: 0,
//       columnWidth: "12px",
//     },
//   },
//   responsive: [
//     {
//       breakpoint: 768,
//       options: {
//         plotOptions: {
//           bar: {
//             borderRadius: 0,
//           },
//         },
//       },
//     },
//   ],
// };