import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Adafruit_tem from './data/get_tem';
import Adafruit_light from './data/get_light';


const Device = () => {
   const navigation = useNavigation();

   const onbackhomeclick =() =>{
    navigation.navigate('home');
   }

   const onTempPress = () =>{
     navigation.navigate('temp_screen');
   }
   const onFanclick = () =>{
     navigation.navigate('fan_screen');
   }
   const onLampclick = () =>{
     navigation.navigate('lamp_screen');
   }
    const item = "26";
  return (    
    <View>
    <View style={{flexDirection:'row',marginTop:40}}>
    <TouchableOpacity onPress={onbackhomeclick}>
    <Ionicons name="arrow-back-outline" size={24} color="black"/>
    </TouchableOpacity>
    <Text style={{fontSize:20,marginLeft:140,fontWeight:'bold'}}>Device</Text>
    </View>
    <View style ={{backgroundColor:'#D5DBDB',height:'100%',marginTop:10}}>
    <View style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            borderRadius: 10,
            justifyContent :'Center',
            }}>
        <View style={{marginTop:20,marginLeft:10,marginRight:10,paddingBottom:20}}>
               <Text style={{fontSize:15,fontWeight:'bold'}}>Cảm biến:</Text>
               <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity style={{width:'80%', height:50, backgroundColor:"#EC4C33",marginTop:20,borderRadius:20,justifyContent:'center',alignItems:'center'}} onPress={onTempPress}>
                  <FontAwesome5 name="temperature-high" size={24} color="white" />
                  <Adafruit_tem/>
                </TouchableOpacity>

                <TouchableOpacity style={{width:'80%', height:50, backgroundColor:"#CEE300",marginTop:20,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                  <Ionicons name="sunny-sharp" size={24} color="white"/>
                  <Adafruit_light/>
                </TouchableOpacity>

                <TouchableOpacity style={{width:'80%', height:50, backgroundColor:"#00E3F5",marginTop:20,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                <Ionicons name="md-water-sharp" size={24} color="white" />
                  <Text style={{color:'white'}}>Độ ẩm phòng : {item} %</Text>
                </TouchableOpacity>
               </View>
        </View>
    </View>
    <View style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            flex: 1,
            borderRadius: 10,
            justifyContent :'Center',
            }}>
            <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Thiết bị:</Text>
            </View>
            <View style={{marginTop:20,marginLeft:10,marginRight:10, flexDirection:'row'}}>
                <TouchableOpacity style ={{width:100,height:100,borderRadius:20,borderWidth:2,justifyContent:'center',alignItems:'center'}} onPress={onFanclick}>
                <MaterialCommunityIcons name="fan" size={40} color="black" />
                <Text>Quạt</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{width:100,height:100,marginLeft:20,borderRadius:20,borderWidth:2,justifyContent:'center',alignItems:'center'}} onPress={onLampclick}>
                <FontAwesome5 name="lightbulb" size={40} color="black" />
                <Text>Đèn</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{width:100,height:100,marginLeft:20,borderRadius:20,borderWidth:2,justifyContent:'center',alignItems:'center'}}>
                <Ionicons name="add-circle-outline" size={40} color="black" />
                <Text>Thêm </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20,marginLeft:10,marginRight:10}}>            
            </View>
    </View>

    </View>
    </View>
  );
}

export default Device;