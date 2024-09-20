import { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";

const SemiGuage = () => {
  const [series, setSeries] = useState([25]);
  const [options, setOptions] = useState({
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
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
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            offsetY: -36,
            fontSize: "18px",
            color: "#fff",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Attendance"],
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={200}
      />
    </div>
  );
};

export default SemiGuage;
