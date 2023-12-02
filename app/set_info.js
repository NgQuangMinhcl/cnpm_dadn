import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import Auto_light_modal from "./components/auto_light_modal";
import axios from "axios";

const Set_info = () => {
  const navigation = useNavigation();
  const onbackhomeclick = () => {
    navigation.navigate("setting");
  };
  const [tempOn, setTempOn] = useState(0);
  const [tempOff, setTempOff] = useState(0);
  const [visible, setVisible] = useState(false);
  const [turnOff, setTurnOff] = useState("");
  const onHide = () => {
    setVisible(false);
  };
  const turnoff = async () => {
    const URL = "https://auth-nodejs.fly.dev/api/auto/lighton";
    const data = {
      light: -99,
    };
    try {
      const response = await axios.post(URL, data);
      if (response.data) {
        setTurnOff("Turn off success");
      }
    } catch (error) {
      setTurnOff("Error");
    }
  };
  return (
    <>
      <Auto_light_modal
        visible={visible}
        onHide={onHide}
        tempOn={tempOn}
        tempOff={tempOff}
      />
      <View>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <TouchableOpacity onPress={onbackhomeclick}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: "auto",
              fontWeight: "bold",
              marginRight: "auto",
            }}
          >
            Auto control Lightning
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
              <Text style={{ fontSize: 15 }}>
                You can set the light you want to keep your room at. We will
                automatically turn on the led when the temperature exceeds the
                temperature you set.
              </Text>
              <View
                style={{
                  marginTop: 20,
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: 20,
                  }}
                >
                  Turn on at: {tempOn} %
                </Text>
                <Slider
                  style={{
                    width: "80%",
                    height: 40,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  minimumValue={0}
                  maximumValue={100}
                  minimumTrackTintColor="red"
                  maximumTrackTintColor="cyan"
                  step={1}
                  value={tempOn}
                  onValueChange={(value) => {
                    setTempOn(value);
                  }}
                />
              </View>
              <Text style={{ fontSize: 15, marginTop: 20 }}>
                You can set the light you want to keep your room at. We will
                automatically turn off the led when the temperature exceeds the
                temperature you set.
              </Text>
              <View
                style={{
                  marginTop: 20,
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: 20,
                  }}
                >
                  Turn off at: {tempOff} %
                </Text>
                <Slider
                  style={{
                    width: "80%",
                    height: 40,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  minimumValue={0}
                  maximumValue={100}
                  minimumTrackTintColor="red"
                  maximumTrackTintColor="cyan"
                  step={1}
                  value={tempOff}
                  onValueChange={(value) => {
                    setTempOff(value);
                  }}
                />
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
                onPress={() => {
                  setVisible(true);
                }}
              >
                <Text style={{ color: "white" }}>Save</Text>
              </TouchableOpacity>
              <View style={{ borderWidth: 1, borderRadius: 20 }}>
                <Text
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: 20,
                  }}
                >
                  Kết quả : {turnOff}
                </Text>
                <TouchableOpacity
                  style={{
                    height: 50,
                    borderRadius: 50,
                    marginLeft: 90,
                    marginRight: 90,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 20,
                    backgroundColor: "#E74C3C",
                  }}
                  onPress={turnoff}
                >
                  <Text style={{ color: "white" }}>Turn off</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Set_info;
