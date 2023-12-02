import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./data/config";
import { Ionicons } from "@expo/vector-icons";
import { Table, Row, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";

const History = () => {
  const navigation = useNavigation();
  const onBackClick = () => {
    navigation.navigate("view_history");
  };

  const currentDate = new Date();

  var array = new Array();
  async function create() {
    try {
      const querySnapshot = await getDocs(collection(db, "Home1"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        array.push(doc.data());
      });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error:", error);
    }
    run();
  }

  var state = {
    tableHead: ["Date", "Humid (%)", "Light (%)", "Temp (°C)"],
    tableData: [["XX", "XX", "XX", "XX"]],
  };
  const [rowsdata, setRowsdata] = useState(state.tableData);
  const run = () => {
    if (array.length > 0) {
      var newRowsData = [];
      for (let i = 0; i < array.length; i++) {
        var item = array[i];
        const row = [item.Time, item.Humidity, item.Light, item.Temperature];
        newRowsData.push(row);
      }
      setRowsdata(newRowsData.reverse());
    }
  };
  const fillterByYear = () => {
    var array = [];
    for (let i = 0; i < rowsdata.length; i++) {
      var item = rowsdata[i];
      if (item[0].includes(currentDate.getFullYear().toString())) {
        array.push(item);
      }
    }
    setRowsdata(array);
  };

  const fillterByMonth = () => {
    var array = [];
    const month = currentDate.getMonth() + 1;
    var month_string = "";
    if (month < 10) {
      month_string = "0" + month.toString();
    } else {
      month_string = month.toString();
    }
    const query = currentDate.getFullYear().toString() + "-" + month_string;
    for (let i = 0; i < rowsdata.length; i++) {
      var item = rowsdata[i];
      if (item[0].includes(query)) {
        array.push(item);
      }
    }
    setRowsdata(array);
  };
  const fillterByDate = () => {
    var array = [];
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    var date_string = "";
    var month_string = "";
    if (date < 10) {
      date_string = "0" + date.toString();
    } else {
      date_string = date.toString();
    }
    if (month < 10) {
      month_string = "0" + month.toString();
    } else {
      month_string = month.toString();
    }
    const query =
      currentDate.getFullYear().toString() +
      "-" +
      month_string +
      "-" +
      date_string;
    for (let i = 0; i < rowsdata.length; i++) {
      var item = rowsdata[i];
      if (item[0].includes(query)) {
        array.push(item);
      }
    }
    setRowsdata(array);
  };
  useEffect(() => {
    create();
  }, []);
  return (
    <>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <TouchableOpacity onPress={onBackClick}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={create}>
          <Text style={{ fontSize: 20, marginLeft: 120, fontWeight: "bold" }}>
            History log
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "#D5DBDB", marginTop: 10 }}>
        <View
          style={{
            width: "100%",
            height: 30,
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              width: "27%",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={fillterByYear}
          >
            <Text style={{ color: "white", fontSize: 14 }}>Filter by year</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#F4D03F",
              width: "27%",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={fillterByMonth}
          >
            <Text style={{ color: "white", fontSize: 14 }}>
              Filter by month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              width: "27%",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={fillterByDate}
          >
            <Text style={{ color: "white", fontSize: 14 }}>Filter by day</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
          <Row
            data={state.tableHead}
            style={{ height: 40, backgroundColor: "#A3E4D7" }}
            textStyle={{ margin: 6 }}
          />
          <Rows data={rowsdata} textStyle={{ margin: 6 }} />
        </Table>
      </ScrollView>
    </>
  );
};

export default History;
