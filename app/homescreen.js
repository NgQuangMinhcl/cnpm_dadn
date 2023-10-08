import { View,Text,ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';




const imageBackground = require('./asset/background_2.jpg') ;
const info = require('./data/name');

const Homescreen = () => {
   const navigation = useNavigation();
   const onQuitclick =() =>{
      navigation.navigate('login');
   }
   
  const onSettingClick = () =>{
    navigation.navigate('setting');
  }
  const onControlClick = () =>{
    navigation.navigate('device');
  }
  const [name, setName] = useState(info.get_name());
  const [imageSource, setimageSource] = useState(info.get_image());
  useFocusEffect(
    React.useCallback(() => {
      const a = info.get_name();
      setName(a);
      const b = info.get_image();
      setimageSource(b);
      console.log('Màn hình được focus');
    }, [])
  );
  return (
    <ImageBackground source={imageBackground} resizeMode="cover" style={{width : '100%',height:'100%',flex: 1}} blurRadius={2}>
     <View style={{flex : 1,backgroundColor: 'rgba(46,134,193,0.2)'}}>
        <View style ={{marginTop:80}}>
            <Text  style ={{fontSize:30,fontWeight:'bold', color :'white'}}>Smart people choose smart home</Text>
        </View>
        <View style={{justifyContent:'center',marginTop:60}}>
          <Text  style ={{fontSize:30,fontWeight:'bold', color :'white',textAlign: 'right'}}>Just relax and enjoy your convenience</Text>
        </View>
     </View>
      <View style ={{flex : 1,backgroundColor:'white',borderRadius:20}}>
        <View style={{justifyContent:'center',alignItems:'center',position: 'absolute', top: -50, width: '100%'}}>
            <Image source={{uri:imageSource}} resizeMode="cover" style={{width : 100,height:100,borderRadius:50,borderWidth:5,borderColor:'white'}}></Image>
        </View>
        <View style ={{marginTop:60,justifyContent:'center',alignItems:'center'}}>
            <Text style ={{fontSize:20,fontWeight:'bold', color :"#1580AB"}}>{name}</Text>
            <Text>------------------------------</Text>
        </View>
         <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
            <TouchableOpacity style={{ width : 150,height : 70,marginLeft: 30,borderRadius: 20,backgroundColor:"#00BF45",justifyContent:'center',alignItems:'center'}} onPress={onControlClick}>
               <Ionicons name="ios-game-controller-outline" size={24} color="white" />
                <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Control</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width : 150,height : 70,marginRight: 30,borderRadius: 20,backgroundColor:"#99A3A4",justifyContent:'center',alignItems:'center'}} onPress={onSettingClick}>
                <MaterialIcons name="settings" size={24} color="white" />
                <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Setting</Text>
            </TouchableOpacity>
         </View>
         <View style={{justifyContent: 'space-between',flexDirection:'row',marginTop:40}}>
            <TouchableOpacity style={{ width : 150,height : 70,marginLeft: 30,borderRadius: 20,backgroundColor:"#00A6FF",justifyContent:'center',alignItems:'center'}}>
                <MaterialIcons name="my-library-books" size={24} color="white" />
                <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width : 150,height : 70,marginRight: 30,borderRadius: 20,backgroundColor:"#FA0000",justifyContent:'center',alignItems:'center'}} onPress={onQuitclick}>
                <MaterialIcons name="exit-to-app" size={24} color="white" />
                <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Quit</Text>
            </TouchableOpacity>
         </View>
      </View>
    </ImageBackground>
  );
}
export default Homescreen;

