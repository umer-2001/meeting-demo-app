import ReactApexChart from "react-apexcharts";

const RadialBar = () => {
  const options = {
    series: [44, 55, 67],
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    track: {
      background: "#f44336", // Red color for the unfilled portion
      strokeWidth: "97%",
      margin: 5, // margin is in pixels
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        color: "#999",
        opacity: 1,
        blur: 2,
      },
    },
    labels: ["Apples", "Oranges", "Bananas"],
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default RadialBar;
