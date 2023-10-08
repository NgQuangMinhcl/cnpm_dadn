import { View, Text,Modal, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import React, { useState } from 'react';
const info = require('../data/name');

const Set_name_modal = ({message,visible,onHide}) => {
   const [new_name, setnew_name] = useState('');
   
   const on_set_new_name = (value) =>{
     setnew_name(value);
   }
   const on_change_click = () =>{
      if(new_name!=""){
      info.changename(new_name);
      }
      onHide();
   }
  
  return (<Modal visible = {visible} transparent = {true} >
        <View style = {styles.modal} >
        <View style = {styles.noti}>
        <View style = {styles.header}><Text style={styles.text}>Change your name</Text></View>
        <View>
            <View><Text style ={{color : 'black'}}>New username</Text></View>
            <View style ={{paddingTop: 5,marginLeft : 30, marginRight : 25, borderBottomColor :'Gray', borderBottomWidth :1}}><TextInput placeholder={'Type your new username'} value={new_name} onChangeText={on_set_new_name}/></View>
            </View>
        <View>
        <TouchableOpacity style ={{height:50,borderRadius: 50,marginLeft : 90, marginRight : 90,justifyContent : 'center',alignItems : 'center', marginVertical: 20,backgroundColor : "#505050"}} onPress={on_change_click}>
        <Text style={{color:'white'}}>Change</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
  </Modal>);
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
export default Set_name_modal;