import React, { useState } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Set_pass = () => {
   const navigation = useNavigation();
   const onbackhomeclick =() =>{
    navigation.navigate('setting');
   }
    const [password, setPassword] = useState('');
    const [new_password, setNew_password] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    const onchangePassword = (value) =>{
        setPassword(value);
    }
    const onchangeNew_password = (value) =>{
        setNew_password(value);
    } 
    
    const onchangePhonenumber = (value) => {
        setPhonenumber(value);
    }


  return (    
    <View>
    <View style={{flexDirection:'row',marginTop:40}}>
    <TouchableOpacity onPress={onbackhomeclick}>
    <Ionicons name="arrow-back-outline" size={24} color="black"/>
    </TouchableOpacity>
    <Text style={{fontSize:20,marginLeft:120,fontWeight:'bold'}}>Change password</Text>
    </View>
    <View style ={{backgroundColor:'#D5DBDB',height:'100%',marginTop:10}}>
    <View style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            flex: 1,
            borderRadius: 10,
            justifyContent :'Center',
            }}>
        <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
        <View style ={{margin : 30}}> 
                             <View><Text style ={{color : 'black'}}>Password</Text></View>
                             <View style ={{paddingTop: 5,marginLeft : 30, marginRight : 25, borderBottomColor :'Gray', borderBottomWidth :1}}><TextInput placeholder={'Type your password'} value={password} onChangeText={onchangePassword}/></View>
                             <View><Text style ={{color : 'black'}}>New password</Text></View>
                             <View style ={{ paddingTop: 5 ,marginLeft : 30, marginRight : 25, borderBottomColor :'Gray', borderBottomWidth :1}}><TextInput placeholder={'Type your new password'} value={new_password} onChangeText={onchangeNew_password}/></View>
                             <View><Text style ={{color : 'black'}}>Phone number</Text></View>
                             <View style ={{ paddingTop: 5 ,marginLeft : 30, marginRight : 25, borderBottomColor :'Gray', borderBottomWidth :1}}><TextInput placeholder={'Type your phone number'} value={phonenumber} onChangeText={onchangePhonenumber}/></View>
                             </View>
                             <View>
                             <TouchableOpacity style ={{height:50,borderRadius: 50,marginLeft : 90, marginRight : 90,justifyContent : 'center',alignItems : 'center', marginVertical: 20,backgroundColor : "#505050"}} ><Text style={{color:'white'}}>Change pass</Text></TouchableOpacity>
                             </View>
        </View>
    </View>
    </View>
    </View>
  );
}

export default Set_pass;