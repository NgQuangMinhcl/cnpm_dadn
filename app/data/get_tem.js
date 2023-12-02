import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const Adafruit_tem = () => {
  const [feedData, setFeedData] = useState(null);
  let i = 10;
  const fetchAdafruitData = () => {
    const feedUrl = "https://io.adafruit.com/api/v2/chuloi/feeds/cambien1";
    axios
      .get(feedUrl)
      .then((response) => {
        const data = response.data;
        setFeedData(data);
      })
      .catch((error) => {
        console.error("Lỗi khi truy cập Adafruit IO:", error);
      });
  };

  useEffect(() => {
    fetchAdafruitData();

    // Tạo một interval để liên tục gọi fetchAdafruitData mỗi vài giây để kiểm tra giá trị mới
    const interval = setInterval(() => {
      fetchAdafruitData();
    }, 10000); // Cứ sau mỗi 5 giây, bạn có thể điều chỉnh tần suất cập nhật tùy ý

    return () => {
      clearInterval(interval); // Dọn dẹp interval khi màn hình bị unmounted
    };
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>
        Nhiệt độ phòng: {feedData ? feedData.last_value : "Chưa có dữ liệu"} °C
      </Text>
    </View>
  );
};

export default Adafruit_tem;
