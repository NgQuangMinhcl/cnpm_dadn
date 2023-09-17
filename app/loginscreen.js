import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Loginmodal from './components/login_component'
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showmodal, setshowmodal] = useState(false);
    const [errormessage, setErrormessage] = useState('');
    const navigation = useNavigation();

    //handle event chang username and pass
    const onchangeUsername = (value) =>{
           setUsername(value);
    }
    const onchangePassword = (value) =>{
        setPassword(value);
     }


    //handle event onclick
    const onclick = () =>{
        if(username.length == 0 || password.length == 0){
           setErrormessage("Vui lòng điền thông tin đăng nhập");
           setshowmodal(true);
        }
        else{
          navigation.navigate('home');
        }
    }
     
    const onHidemodal =() =>{
      setshowmodal(false);
    }




    return (
        <View style={{
          backgroundColor: "#2E86C1",
          flex: 1
        }}>
          <Loginmodal visible={showmodal} message={errormessage} onHide={onHidemodal}/>
          <View style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            flex: 1,
            borderRadius: 10
          }}>
            <View style={{
              flex: 1,
              marginVertical: 20
            }}>
              {/*begin*/}
              <View style = {{
                  flex : 1,
                  justifyContent : 'center',
                  alignItems : 'center'
                  }}>
                  <Text style ={{
                             fontSize :30,
                             fontWeight: 'bold',
                             color : 'black'
                             }}>Login</Text>
              </View>
              {/*center*/}
              <View style = {{
                    flex : 6,
                   }}>   
                         <View style ={{margin : 30}}> 
                             <View><Text style ={{color : 'black'}}>Username</Text></View>
                             <View style ={{paddingTop: 5,marginLeft : 30, marginRight : 25, borderBottomColor :'Gray', borderBottomWidth :1}}><TextInput placeholder={'Type your username'} value={username} onChangeText={onchangeUsername}/></View>
                             <View><Text style ={{color : 'black'}}>Password</Text></View>
                             <View style ={{ paddingTop: 5 ,marginLeft : 30, marginRight : 25, borderBottomColor :'Gray', borderBottomWidth :1}}><TextInput secureTextEntry={true} placeholder={'Type your password'} value={password} onChangeText={onchangePassword}/></View>
                             <View style ={{ paddingTop: 15 ,alignItems: 'flex-end',}}><TouchableOpacity><Text>Forgot password</Text></TouchableOpacity></View>
                         </View>
    
                         <View>
                            <TouchableOpacity style ={{height:50,borderRadius: 50,marginLeft : 90, marginRight : 90,justifyContent : 'center',alignItems : 'center', marginVertical: 20,backgroundColor : "#00A7EB"}} onPress = {onclick}><Text>Login</Text></TouchableOpacity>
                         </View>
              </View>
              {/*end*/}
              <View style ={{
                      flex : 2,
                      justifyContent : 'center',
                      alignItems : 'center'
                    }}>
                         <Text>Or Sign Up Using</Text>
                         <TouchableOpacity style ={{padding :20}}><Text style ={{color : 'black',fontWeight : '500'}}>Sign Up</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
}

export default LoginScreen