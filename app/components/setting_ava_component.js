import { View, Text,Modal, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import React, { useState } from 'react';
const info = require('../data/name');

const Set_ava_modal = ({message,visible,onHide}) => {
   const [new_image, setImage] = useState('');
   
   const on_set_new_image = (value) =>{
     setImage(value);
   }
   const on_change_click = () =>{
      if(new_image!=""){
      info.changeimage(new_image);
      }
      onHide();
   }
  
  return (<Modal visible = {visible} transparent = {true} >
        <View style = {styles.modal} >
        <View style = {styles.noti}>
        <View style = {styles.header}><Text style={styles.text}>Change your avatar</Text></View>
        <View>
            <Text>{message}</Text>
            <View><Text style ={{color : 'black'}}>New avatar</Text></View>
            <View style ={{paddingTop: 5,marginLeft : 30, marginRight : 25, borderBottomColor :'Gray', borderBottomWidth :1}}><TextInput placeholder={'Type the link of your image'} value={new_image} onChangeText={on_set_new_image}/></View>
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
export default Set_ava_modal;