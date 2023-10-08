import { View, Text,Modal, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useEffect, useState } from 'react';


const Auto_tem_modal = ({visible,onHide}) => {
   
   const onClickadd = () =>{
        onHide();
   }
   const [sliderValue, setSliderValue] = useState(0); 
   const onSliderValueChange = (value) => {
     setSliderValue(value); 
   };

  return <Modal visible = {visible} transparent = {true} >
        <View style = {styles.modal} >
        <View style = {styles.noti}>
        <View style = {styles.header}><Text style={styles.text}>Chọn ngưỡng nhiệt độ tắt quạt</Text></View>
        <View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text>Nhiệt độ bạn mong muốn: {sliderValue} °C</Text>
        <Slider
            style={{width: '80%', height: 40}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#06D3DD"
            maximumTrackTintColor="#000000"
            step={1}
            value = {sliderValue}
            onValueChange={onSliderValueChange}
            />
        </View>
        <TouchableOpacity style ={{height:50,borderRadius: 50,marginLeft : 90, marginRight : 90,justifyContent : 'center',alignItems : 'center', marginVertical: 20,backgroundColor : "#4C4C4C"}} onPress={onClickadd}>
        <Text style = {{color:'white'}}>Tự động</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
  </Modal>
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor : 'rgba(00,00,00,.5)',
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 20
  },
  noti :{
    backgroundColor : 'white',
    width : "100%",
    borderRadius: 10,
    padding: 20
  },
  text :{
    fontSize : 20,
    color: 'black'
  },
  header : {
     justifyContent : 'center',
     alignItems : 'center',
     marginBottom: 20
  }
});
export default Auto_tem_modal;