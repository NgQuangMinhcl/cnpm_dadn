import { View, Text,Modal, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import React, {  useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';


const Auto_time_modal = ({visible,onHide}) => {
   const onClickadd = () =>{
        onHide();
   }
  
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);
   const [items, setItems] = useState([
    {label: 'Quạt', value: 'quạt'},
    {label: 'Đèn', value: 'đèn'}
  ]);
   const [time, setTime] = useState('');
   const on_get_time = (value) =>{
      setTime(value);
   }
  return <Modal visible = {visible} transparent = {true} >
        <View style = {styles.modal} >
        <View style = {styles.noti}>
        <View style = {styles.header}><Text style={styles.text}>Chọn thời gian tắt thiết bị</Text></View>
        <View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text>Chọn thiết bị</Text>
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style ={{marginTop:10}}
        />
        <Text>{value}</Text>
        <View style={{marginTop:10,flexDirection:'row'}}>
            <Text>Tắt thiết bị sau: </Text>
            <View style={{borderWidth:2,marginLeft:10,width:'10%',borderRadius:10,justifyContent:'center'}}><TextInput placeholder={'giờ'} value={time} onChangeText={on_get_time}></TextInput></View>
        </View>
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
export default Auto_time_modal;