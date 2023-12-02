import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Table, Row, Rows } from "react-native-table-component";
import axios from "axios";

const Login_history = () => {
  const navigation = useNavigation();
  var state = {
    tableHead: ["Date", "Time", "Username"],
    tableData: [["XX", "XX", "XX"]],
  };
  const [rowsdata, setRowsdata] = useState(state.tableData);
  const onbackhomeclick = () => {
    navigation.navigate("view_history");
  };
  const get_data = () => {
    const URL = "https://auth-server-navy.vercel.app/api/date";
    axios
      .get(URL)
      .then((res) => {
        let arr = [];
        res.data.data.map((item) => {
          let arr_item = new Array();
          arr_item.push(item.date.split(" ")[0]);
          arr_item.push(item.date.split(" ")[1]);
          arr_item.push(item.user_name);
          arr.push(arr_item);
        });
        setRowsdata(arr.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    get_data();
  }, []);
  return (
    <>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <TouchableOpacity onPress={onbackhomeclick}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 128, fontWeight: "bold" }}>
          Login history
        </Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: "white",
          height: "100%",
          marginTop: 10,
          borderRadius: 10,
        }}
      >
        <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
          <Row
            data={state.tableHead}
            style={{ height: 40, backgroundColor: "#F5CBA7" }}
            textStyle={{ margin: 6 }}
          />
          <Rows
            style={{ height: 40 }}
            data={rowsdata}
            textStyle={{ margin: 6 }}
          />
        </Table>
      </ScrollView>
    </>
  );
};

export default Login_history;
