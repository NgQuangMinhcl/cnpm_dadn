import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const View_history = () => {
  const navigation = useNavigation();
  const onbackhomeclick = () => {
    navigation.navigate("home");
  };
  const ondeviceclick = () => {
    navigation.navigate("history");
  };
  const onloginclick = () => {
    navigation.navigate("login_history");
  };
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <TouchableOpacity onPress={onbackhomeclick}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 130, fontWeight: "bold" }}>
          View history
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
          <TouchableOpacity
            style={{
              backgroundColor: "#F5CBA7",
              width: "70%",
              height: 50,
              marginLeft: "15%",
              marginTop: "20%",
              borderWidth: 1,
              borderRadius: 10,
              elevation: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onloginclick}
          >
            <Text style={{ fontSize: 15 }}>Login history</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#A3E4D7",
              width: "70%",
              height: 50,
              marginLeft: "15%",
              marginTop: "20%",
              borderWidth: 1,
              borderRadius: 10,
              elevation: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={ondeviceclick}
          >
            <Text style={{ fontSize: 15 }}>Device history</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default View_history;
