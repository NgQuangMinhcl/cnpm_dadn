import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Auto_light_modal = ({ visible, onHide, tempOn, tempOff }) => {
  const [closeButton, setClose] = useState(false);
  const [addButton, setAdd] = useState(true);
  const [tempOnresult, setTempOn] = useState("");
  const [tempOffresult, setTempOff] = useState("");
  const sendtempOn = async () => {
    const URL = "https://auth-nodejs.fly.dev/api/auto/lighton";
    const data = {
      light: tempOn,
    };
    try {
      const response = await axios.post(URL, data);
      if (response.data) {
        setTempOn("Turn on success");
      }
    } catch (error) {
      setTempOn("Error");
    }
  };

  const sendtempOff = async () => {
    const URL = "https://auth-nodejs.fly.dev/api/auto/lightoff";
    const data = {
      light: tempOff,
    };
    try {
      const response = await axios.post(URL, data);
      if (response.data) {
        setTempOff("Turn off success");
      }
    } catch (error) {
      setTempOff("Error");
    }
  };
  const onClickadd = () => {
    sendtempOn();
    sendtempOff();
    setAdd(false);
    setClose(true);
  };

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.noti}>
          <View style={styles.header}>
            <Text style={styles.text}>Thông báo</Text>
          </View>
          <View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text>Độ sáng bật đèn: {tempOn}%</Text>
              <Text>Độ sáng tắt đèn: {tempOff}%</Text>
              <Text>
                Kết quả : {tempOnresult} {tempOffresult}
              </Text>
            </View>
            {addButton && (
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
            )}
            {closeButton && (
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
                  setAdd(true);
                  setClose(false);
                  setTempOn("");
                  setTempOff("");
                  onHide();
                }}
              >
                <Text style={{ color: "white" }}>Close</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(00,00,00,.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noti: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
export default Auto_light_modal;
