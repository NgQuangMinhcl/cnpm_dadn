import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const Set_policy = () => {
  const navigation = useNavigation();
  const onbackhomeclick = () => {
    navigation.navigate("setting");
  };
  const [min, setMin] = useState("");
  const [hour, setHour] = useState("");
  const [minOn, setMinOn] = useState("");
  const [hourOn, setHourOn] = useState("");
  const [result, setResult] = useState("");
  const [resultOn, setResultOn] = useState("");
  const onClickadd = async () => {
    const URL = "https://auth-nodejs.fly.dev/api/auto/timeoff";
    const data = {
      minute: min,
      hour: hour,
    };
    try {
      const response = await axios.post(URL, data);
      if (response.data) {
        setResult("Success");
      }
    } catch (error) {
      setResult("Error");
    }
  };
  const onClickOn = async () => {
    const URL = "https://auth-nodejs.fly.dev/api/auto/timeon";
    const data = {
      minute: minOn,
      hour: hourOn,
    };
    try {
      const response = await axios.post(URL, data);
      if (response.data) {
        setResultOn("Success");
      }
    } catch (error) {
      setResultOn("Error");
    }
  };
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <TouchableOpacity onPress={onbackhomeclick}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 120, fontWeight: "bold" }}>
          Auto check
        </Text>
      </View>
      <View
        style={{ backgroundColor: "#D5DBDB", height: "100%", marginTop: 10 }}
      >
        <View
          style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            flex: 1,
            borderRadius: 10,
            justifyContent: "Center",
          }}
        >
          <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Turn off system at:{" "}
            </Text>
            <View
              style={{
                marginTop: 10,
                justifyContent: "center",
                columnGap: 10,
                flexDirection: "row",
                borderRadius: 20,
                borderWidth: 1,
                padding: 10,
              }}
            >
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  height: 100,
                  width: 100,
                }}
              >
                <TextInput
                  placeholder="HH"
                  value={hour}
                  onChangeText={(val) => {
                    setHour(val);
                  }}
                  style={{
                    height: "90%",
                    width: "90%",
                    fontSize: 40,
                    paddingLeft: 20,
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  height: 100,
                  width: 100,
                }}
              >
                <TextInput
                  placeholder="MM"
                  value={min}
                  onChangeText={(val) => {
                    setMin(val);
                  }}
                  style={{
                    height: "90%",
                    width: "90%",
                    fontSize: 40,
                    paddingLeft: 20,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                height: 50,
                borderRadius: 50,
                marginLeft: 90,
                marginRight: 90,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20,
                backgroundColor: "#00A7EB",
              }}
              onPress={onClickadd}
            >
              <Text style={{ color: "white" }}>Xác nhận</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
              Result : {result}
            </Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Turn on system at:{" "}
            </Text>
            <View
              style={{
                marginTop: 10,
                justifyContent: "center",
                columnGap: 10,
                flexDirection: "row",
                borderRadius: 20,
                borderWidth: 1,
                padding: 10,
              }}
            >
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  height: 100,
                  width: 100,
                }}
              >
                <TextInput
                  placeholder="HH"
                  value={hourOn}
                  onChangeText={(val) => {
                    setHourOn(val);
                  }}
                  style={{
                    height: "90%",
                    width: "90%",
                    fontSize: 40,
                    paddingLeft: 20,
                  }}
                />
              </View>
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  height: 100,
                  width: 100,
                }}
              >
                <TextInput
                  placeholder="MM"
                  value={minOn}
                  onChangeText={(val) => {
                    setMinOn(val);
                  }}
                  style={{
                    height: "90%",
                    width: "90%",
                    fontSize: 40,
                    paddingLeft: 20,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                height: 50,
                borderRadius: 50,
                marginLeft: 90,
                marginRight: 90,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20,
                backgroundColor: "#00A7EB",
              }}
              onPress={onClickOn}
            >
              <Text style={{ color: "white" }}>Xác nhận</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
              Result : {resultOn}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Set_policy;
