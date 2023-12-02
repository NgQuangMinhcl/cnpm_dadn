import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RoomComponent from './components/control_room_component';
import { Entypo } from '@expo/vector-icons';
import Add_room_modal from './components/add_room_medal';
import { useFocusEffect } from '@react-navigation/native';


const dataarray = require('./data/room');

const Control_room = () => {
    const [showmodal,setshowmodal] =useState(false);
    const navigation = useNavigation();
    const [data_room,setdata_room] = useState(dataarray.get_array());
    const onHide = () =>{
        setshowmodal(false);
        navigation.navigate('control_room');
    }
    const onAddClick = () =>{
        setshowmodal(true);
    }
   const onbackhomeclick =() =>{
    navigation.navigate('home');
   }
   useFocusEffect(
    React.useCallback(() => {
        setdata_room(dataarray.get_array());
    }, [dataarray.get_array()])
    );
  return (    
    
    <View>
    <View style={{flexDirection:'row',marginTop:40}}>
    <Add_room_modal visible={showmodal} onHide={onHide}/>
    <TouchableOpacity onPress={onbackhomeclick}>
    <Ionicons name="arrow-back-outline" size={24} color="black"/>
    </TouchableOpacity>
    <Text style={{fontSize:20,marginLeft:120,fontWeight:'bold'}}>Control Center</Text>
    <TouchableOpacity style={{marginLeft:100}} onPress={onAddClick}>
    <Entypo name="add-to-list" size={24} color="black" />
    </TouchableOpacity>
    </View>
    <View style ={{backgroundColor:'#D5DBDB',height:'100%',marginTop:10}}>
    <View style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            flex: 1,
            borderRadius: 10,
            justifyContent :'Center',
            }}>
    <View style = {{margin: 20}}><RoomComponent data={data_room} /></View> 
    </View>
    </View>
    </View>
  );
}

export default Control_room;