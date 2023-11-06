import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Hour", "Temperature", "Humidity"],
  ["0", 19, 70],
  ["1", 21, 75],
  ["2", 22, 82],
  ["3", 24, 91],
  ["4", 26, 87],
  ["5", 21, 80],
  ["6", 22, 78],
  ["7", 24, 79],
  ["8", 21, 72],
  ["9", 22, 71],
  ["10", 24, 72],
  ["11", 26, 73],
  ["12", 21, 75],
  ["13", 22, 72],
  ["14", 24, 71],
  ["15", 26, 73],
  ["16", 21, 74],
  ["17", 22, 78],
  ["18", 24, 72],
  ["19", 21, 72],
  ["20", 22, 73],
  ["21", 24, 74],
  ["22", 26, 72],
  ["23", 24, 78],
  
];

export const options = {
  chart: {
    title: "Temperature and Humidity in 9 Oct 2023",
    subtitle: "Temperature and Humidity: 0-23h",
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
