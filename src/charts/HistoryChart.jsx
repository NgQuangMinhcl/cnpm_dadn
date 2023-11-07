import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from 'axios';
import { getDatabase, ref, onValue } from "firebase/database";



export const options = {
  chart: {
    title: "Temperature in 9 Oct 2023",
  },
};



const HistoryChart = (props) => {
  const [tableData, setData] = useState([]);


  useEffect(() => {
    // Set up a listener to listen for changes in a specific Firebase database node
    const databaseRef = ref(getDatabase(), props.feedId)
    onValue(databaseRef, (snapshot) => {
      const allValues = snapshot.val()
      const dataToDisplay = [["Hour", "Temp"]]
      for (const key in allValues) {
        dataToDisplay.push([new Date(Number(key * 1000)), Number(allValues[key])])
      }
      console.log('dataToDisplay', dataToDisplay)
      // Lọc dữ liệu trong 1 ngày cụ thể (ví dụ ngày 24/10)
      const targetDate = props.targetDate.toDate() || new Date();
      // tính trung bình cho mỗi giờ
      const hourlyAverages = {};

      dataToDisplay.forEach(([hour, temp]) => {
        const date = new Date(hour);

        // Kiểm tra xem dữ liệu có trong ngày
        if (
          date.getDate() === targetDate.getDate() &&
          date.getMonth() === targetDate.getMonth() &&
          date.getFullYear() === targetDate.getFullYear()
        ) {
          const hourKey = date.getHours();
          if (hourlyAverages[hourKey] === undefined) {
            hourlyAverages[hourKey] = {
              total: temp,
              count: 1,
            };
          } else {
            hourlyAverages[hourKey].total += temp;
            hourlyAverages[hourKey].count += 1;
          }
        }
      });
      const hourlyAveragesArray = [['Hour', props.nameChart]];

      for (let hour = 0; hour < 24; hour++) {
        if (hourlyAverages[hour] === undefined) {
          // Nếu không có dữ liệu cho giờ 0
          hourlyAveragesArray.push([hour.toString(), 0]);
        } else {
          const averageTemp = hourlyAverages[hour].total / hourlyAverages[hour].count;
          hourlyAveragesArray.push([hour.toString(), averageTemp]);
        }
      }
      console.log('hourlyAveragesArray',hourlyAveragesArray)
      setData(hourlyAveragesArray)
    })



  }, [props.targetDate, props.feedId, props.nameChart]);

  return (
    console.log(tableData),
    tableData.length > 1 ?(
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={tableData}
      options={options}
      // title={props.nameChart}
    />
    ):(<p>Không có dữ liệu</p>)
  );
}

export default HistoryChart;