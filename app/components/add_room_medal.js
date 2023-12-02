import { useState } from 'react';
import { View, Text,Modal, StyleSheet,TouchableOpacity, TextInput } from 'react-native';


const dataarray = require('../data/room');


const Add_room_modal = ({visible,onHide}) => {
   const[name,setName] = useState('');
   const onchangeName = (value) =>{
     setName(value);
   }
   const[sta,setSta] = useState('');
   const onchangeSta = (value) =>{
     setSta(value);
   }
   const onClickadd = () =>{
        if(sta!='' && name!=''){
          dataarray.pushdata(sta,name);
        }
        onHide();
   }
  return <Modal visible = {visible} transparent = {true} >
        <View style = {styles.modal} >
        <View style = {styles.noti}>
        <View style = {styles.header}><Text style={styles.text}>Thêm phòng</Text></View>
        <View>
        <View><Text style ={{color : 'black'}}>Tên phòng</Text></View>
        <View style ={{paddingTop: 5,marginLeft : 30, marginRight : 25, borderBottomColor :'Gray', borderBottomWidth :1}}><TextInput placeholder={'Nhập tên phòng'} value={name} onChangeText={onchangeName}/></View>
        <View style = {{marginTop:10}}><Text style ={{color : 'black'}}>Loại phòng</Text></View>
        <View style ={{paddingTop: 5,marginLeft : 30, marginRight : 25, borderBottomColor :'Gray', borderBottomWidth :1}}><TextInput placeholder={'Phòng ngủ/ Phòng khách/ Khác'} value={sta} onChangeText={onchangeSta}/></View>
        <TouchableOpacity style ={{height:50,borderRadius: 50,marginLeft : 90, marginRight : 90,justifyContent : 'center',alignItems : 'center', marginVertical: 20,backgroundColor : "#4C4C4C"}} onPress={onClickadd}>
        <Text style = {{color:'white'}}>Thêm</Text>
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
export default Add_room_modal;