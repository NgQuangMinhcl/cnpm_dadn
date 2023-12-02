import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const icon_check = (value) =>{
      if(value ==  "Phòng ngủ") return "bed";
      else if(value == "Phòng khách") return "sofa-single";
      else return "door-open";
}


const RoomComponent = ({ data }) => {
  const navigation = useNavigation();
  const handlePress = (item) => {
    // Xử lý khi phần tử được chạm vào
    navigation.navigate('device');
  };

  const rows = [];
  const [dataArray, setDataArray] = useState(data);
  for (let i = 0; i < dataArray.length; i += 2) {
    const firstItem = dataArray[i];
    const secondItem = i + 1 < dataArray.length ? dataArray[i + 1] : null;
    
    rows.push(
      <View key={i} style={styles.row} >
        <TouchableOpacity style={styles.touchbuttonleft} onPress={() => handlePress(firstItem)} >
        <MaterialCommunityIcons name={icon_check(firstItem.sta)} size={24} color="black" />
          <Text>{firstItem.name}</Text>
        </TouchableOpacity>
        {secondItem && (
          <TouchableOpacity style={styles.touchbuttonright} onPress={() => handlePress(secondItem)}>
            <MaterialCommunityIcons name={icon_check(secondItem.sta)} size={24} color="black" />
            <Text>{secondItem.name}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return <View>{rows}</View>;
};



const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Để tạo khoảng cách giữa các dòng
    paddingBottom : 10,
    paddingTop :10,
  },
  touchbuttonleft: {
     width : 110,
     height : 70,
     marginLeft: 30,
     borderColor : '#00B5FF',
     borderRadius : 20,
     borderWidth: 2,
     justifyContent: 'center',
     alignItems: 'center',
  },
  touchbuttonright: {
     width : 110,
     height : 70,
     marginRight: 30,
     borderColor : '#00B5FF',
     borderRadius : 20,
     borderWidth: 2,
     justifyContent: 'center',
     alignItems: 'center',
  }
});

export default RoomComponent;