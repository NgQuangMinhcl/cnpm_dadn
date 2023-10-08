import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Set_name_modal from './components/setting_username_component';
import Loginmodal from './components/login_component';
import Set_ava_modal from './components/setting_ava_component';

const Settingscreen = () => {
   const [showmodal, setshowmodal] = useState(false);
   const [errormessage, setErrormessage] = useState('');
   
   const [showmodal_name, setshowmodal_name] = useState(false);
   const [username_mes,setMes_username] = useState('');

   const [showmodal_image, setshowimage] = useState(false);
   const [image_mes,setMes_image] = useState('');
   const onHide_name_modal = () =>{
    setshowmodal_name(false);
   }
   const onHide_image = () =>{
    setshowimage(false);
   }
   const onHidemodal =() =>{
    setshowmodal(false);
   }
   const navigation = useNavigation();
   const onQuitclick =() =>{
    navigation.navigate('login');
   }
   const onbackhomeclick =() =>{
    navigation.navigate('home');
   }

   const onInfo_click = () =>{
    navigation.navigate('set_info');
   }
   const onTerm_click =() =>{
     navigation.navigate('set_term');
   }
   const onPolicy_click = () =>{
    navigation.navigate('set_policy');
   }
   const onPass_click = () =>{
      navigation.navigate('set_pass');
   }

   const OnNeedHelp_click = () =>{
     setshowmodal(true);
     setErrormessage("Đối với mọi thắc mắc, hay yêu cầu trợ giúp nào, vui lòng liên hệ trực tiếp với chúng tôi thông qua địa chỉ: minh.nguyenquang@hcmut.edu.vn")
   }
    
   const onChange_username = () =>{
      setshowmodal_name(true);
      setMes_username("name_modal");
   }
    const onChange_image = () =>{
        setshowimage(true);
        setMes_image("Vui lòng chọn đúng link hình ảnh, thay vì những link khác");
    }
    
  return (    
    <View >
    <Set_ava_modal visible={showmodal_image} message={image_mes} onHide={onHide_image}/>
    <Set_name_modal visible={showmodal_name} message={username_mes} onHide={onHide_name_modal}/>
    <Loginmodal visible={showmodal} message={errormessage} onHide={onHidemodal}/>
    <View style={{flexDirection:'row',marginTop:40}}>
    <TouchableOpacity onPress={onbackhomeclick}>
    <Ionicons name="arrow-back-outline" size={24} color="black"/>
    </TouchableOpacity>
    <Text style={{fontSize:20,marginLeft:150,fontWeight:'bold'}}>Setting</Text>
    </View>
    <View style ={{backgroundColor:'#D5DBDB',height:'100%',marginTop:10}}>
    <View style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            flex: 1,
            borderRadius: 10,
            justifyContent :'Center',
            }}>
        <Text style={{marginTop:20,marginLeft:20}}>Change your Information :</Text>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style ={{marginTop:20,flexDirection:'row',borderWidth:2,borderRadius:20,width:"65%"}} onPress={onChange_image}>
            <Ionicons name="image" size={22} color="black" />
            <Text style={{fontSize:15}}> Change your avatar</Text>
        </TouchableOpacity>
        <TouchableOpacity style ={{marginTop:20,flexDirection:'row',borderWidth:2,borderRadius:20,width:"65%"}} onPress={onChange_username}>
            <Ionicons name="person" size={24} color="black" style ={{marginRight:10,marginLeft:5}} />
            <Text style={{fontSize:15}}> Change your name</Text>
        </TouchableOpacity>
        <TouchableOpacity style ={{marginTop:20,flexDirection:'row',borderWidth:2,borderRadius:20,width:"65%"}} onPress={onPass_click}>
            <Ionicons name="key" size={24} color="black" />
            <Text style={{fontSize:15}}> Change your password</Text>
        </TouchableOpacity>
        </View>
        <Text style={{marginTop:20,marginLeft:20}}>About us :</Text>
        <View style ={{alignItems:'center'}}>
            <TouchableOpacity style ={{marginTop:20,flexDirection:'row',borderWidth:2,borderRadius:20,width:"65%"}} onPress={onInfo_click}>
                <AntDesign name="book" size={24} color="black" />
                <Text style={{fontSize:15}}> Introduction</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={{marginTop:20,flexDirection:'row',borderWidth:2,borderRadius:20,width:"65%"}} onPress={onTerm_click}>
                <AntDesign name="book" size={24} color="black" />
                <Text style={{fontSize:15}}> Terms of service</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={{marginTop:20,flexDirection:'row',borderWidth:2,borderRadius:20,width:"65%"}} onPress={onPolicy_click}>
                <AntDesign name="book" size={24} color="black" />
                <Text style={{fontSize:15}}> Policy service </Text>
            </TouchableOpacity>
        </View>
        <Text style={{marginTop:20,marginLeft:20}}>Application shortcuts :</Text>
        <View style ={{alignItems:'center'}}>
            <TouchableOpacity style ={{marginTop:20,flexDirection:'row',borderWidth:2,borderRadius:20,width:"65%"}} onPress={OnNeedHelp_click}>
                <Ionicons name="help-circle-outline" size={24} color="black" />
                <Text style={{fontSize:15}}> Need help</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={{marginTop:20,flexDirection:'row',borderWidth:2,borderRadius:20,width:"65%"}} onPress={onQuitclick}>
                <Ionicons name="md-exit-outline" size={24} color="black" />
                <Text style={{fontSize:15}}> Exit </Text>
            </TouchableOpacity>
        </View>
    </View>
    </View>
    </View>
  );
}

export default Settingscreen;