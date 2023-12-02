import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

const chartConfig = {
  backgroundGradientFrom: "#FFFFFF", // Sửa màu nền từ màu đen thành màu trắng
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFFF", // Sửa màu nền đến từ màu đen thành màu trắng
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Sửa màu của dữ liệu thành màu đen
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};
const chartConfig_pro = {
  backgroundGradientFrom: "#FFFFFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFFF",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(251,1,1, ${opacity})`, // Sửa màu của dữ liệu thành màu đen
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      color: (opacity = 1) => `rgba(252,54,40, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Biểu đồ nhiệt độ gần đây (°C)"], // optional
};
const chartdata = {
  data: [0.4],
};

const Temp_screen = () => {
  const navigation = useNavigation();
  const onbackhomeclick = () => {
    navigation.navigate("device");
  };
  const [feed, setfeed] = useState(null);

  const fetchTempData = () => {
    const feedUrl = "https://io.adafruit.com/api/v2/chuloi/feeds/cambien1/data";
    axios
      .get(feedUrl)
      .then((response) => {
        let data = response.data;
        if (JSON.stringify(data) !== JSON.stringify(feed)) {
          setfeed(data);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi truy cập Adafruit IO:", error);
      });
  };
  const [note, setNote] = useState("Chưa có dữ liệu");
  const run = () => {
    if (feed != null) {
      let a = [];
      let b = [];
      let d = parseInt(feed[0].value);
      if (d > 30) {
        setNote(
          "Nhiệt độ hiện tại rất nóng, bạn nên uống nhiều nước hơn và hạn chế ra ngoài"
        );
      } else if (d > 25 && d <= 30) {
        setNote("Nhiệt độ hiện tại có dấu hiệu nóng lên, bạn nên cẩn thận");
      } else if (d > 20 && d <= 25) {
        setNote(
          "Nhiệt độ hiện tại rất tốt, thích hợp cho các hoạt động ngoài trời"
        );
      } else if (d < 20 || d == 20) {
        setNote("Nhiệt độ hiện tại thấp, bạn nên giữ ấm cho cơ thể");
      }
      chartdata.data.pop();
      chartdata.data.push(d / 100);
      for (let i = 0; i < 10 && i < feed.length; i++) {
        if (feed[i] && typeof feed[i].value !== "undefined") {
          b.push(feed[i].value);
        }
      }
      let c = b.length;
      for (let i = 0; i < c; i++) {
        a.push(b.pop());
      }

      if (a.length > 0) {
        data.datasets[0].data = a;
      }
    }
  };
  useEffect(() => {
    fetchTempData();
    run();
    const interval = setInterval(() => {
      fetchTempData();
      run();
    }, 10000);
    return () => {
      clearInterval(interval); // Dọn dẹp interval khi màn hình bị unmounted
    };
  }, [feed]);

  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <TouchableOpacity onPress={onbackhomeclick}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 120, fontWeight: "bold" }}>
          Nhiệt độ phòng
        </Text>
      </View>
      <View
        style={{ backgroundColor: "#D5DBDB", height: "100%", marginTop: 10 }}
      >
        <View
          style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            borderRadius: 10,
            justifyContent: "Center",
          }}
        >
          <View
            style={{
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LineChart
              data={data}
              width={300}
              height={220}
              chartConfig={chartConfig}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            borderRadius: 10,
            justifyContent: "Center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ marginTop: 10, fontSize: 15 }}>
            Nhiệt độ hiện nay so với 100 °C
          </Text>
          <ProgressChart
            data={chartdata}
            width={300}
            height={220}
            strokeWidth={32}
            radius={64}
            chartConfig={chartConfig_pro}
            hideLegend={false}
          />
        </View>
        <View
          style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            borderRadius: 10,
            justifyContent: "Center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ marginTop: 10, fontSize: 15 }}>
            Chú ý: Nhiệt độ hiện tại là{" "}
            {feed ? feed[0].value : "Chưa có dữ liệu"} °C
          </Text>
          <Ionicons name="notifications" size={24} color="#F4D03F" />
          <Text>{note}</Text>
        </View>
      </View>
    </View>
  );
};

export default Temp_screen;
