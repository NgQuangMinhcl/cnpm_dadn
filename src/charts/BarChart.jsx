import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Hour", "Temperature"],
  ["0", 19],
  ["1", 21],
  ["2", 22],
  ["3", 24],
  ["4", 26],
  ["5", 21],
  ["6", 22],
  ["7", 24],
  ["8", 21],
  ["9", 22],
  ["10", 24],
  ["11", 26],
  ["12", 21],
  ["13", 22],
  ["14", 24],
  ["15", 26],
  ["16", 21],
  ["17", 22],
  ["18", 24],
  ["19", 21],
  ["20", 22],
  ["21", 24],
  ["22", 26],
  ["23", 24],
  
];

export const options = {
  chart: {
    title: "Temperature in 9 Oct 2023",
    subtitle: "Temperature: 0-23h",
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
