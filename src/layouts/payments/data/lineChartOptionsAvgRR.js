// const lineChartOptionsDashboard = {
//     scales: {
//       x: {
//         title: { display: true, text: "Days", color: "#ffffff" },
//       },
//       y: {
//         title: { display: true, text: "Acceptance Rate (%)", color: "#ffffff" },
//         min: 90, // Y-axis starts from 90%
//         max: 100, // Y-axis ends at 100%
//         ticks: {
//           stepSize: 2,
//           color: "#ffffff",
//         },
//       },
//     },
//     plugins: {
//       legend: { display: false },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };




export const lineChartOptionsAvgRR = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
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
      formatter: function (value) {
        return `${value}%`; // Add percentage sign
      },
      style: {
        colors: "#c8cfca",
        fontSize: "13px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#0075FF", "#2CD9FF"],
  },
  colors: ["#0075FF", "#2CD9FF"],
};
