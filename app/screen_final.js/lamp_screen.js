import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Lamp_screen = () => {
    const postToAdafruitIO = async () => {
        if(feedData.last_value!=null){
            try {
                
               const feedUrl = 'https://io.adafruit.com/api/v2/minhnguyenquang/feeds/switch-feed/data';
               let newData ;
               if(feedData.last_value == "ON"){
                newData = {
                   value: "OFF", 
                 };
                }
                else if(feedData.last_value == "OFF"){
                    newData = {
                    value: "ON", 
                    };
                }
                const headers = {
                  'X-AIO-Key': 'aio_EyyJ58bEsWFEFNryKrNKyPfLjFcI', 
                };
            
                const response = await axios.post(feedUrl, newData, { headers });
      
                setResult("Đã thực hiện thành công, vui lòng chờ trong giây lát");
              } catch (error) {
                setResult("Đã có lỗi trong quá trình thực hiện");
                console.log(error);
              }
        }
      };

    const [feedData, setFeedData] = useState(null);
    const [results, setResult] = useState("");
  const fetchAdafruitData = () => {
     const feedUrl = 'https://io.adafruit.com/api/v2/minhnguyenquang/feeds/switch-feed';
     axios.get(feedUrl)
       .then((response) => {
         const data = response.data;
         if(JSON.stringify(data) !== JSON.stringify(feedData)){
          setFeedData(data);
        }
      })
      .catch((error) => {
        console.error('Lỗi khi truy cập Adafruit IO:', error);
      });
  };
  const [time,setTime] = useState('');
  const onTimeclick = (value) =>{
     setTime(value)
  }
  useEffect(() => {
    fetchAdafruitData();
    
    // Tạo một interval để liên tục gọi fetchAdafruitData mỗi vài giây để kiểm tra giá trị mới
    
    const interval = setInterval(() => {
      fetchAdafruitData();
    }, 10000); // Cứ sau mỗi 5 giây, bạn có thể điều chỉnh tần suất cập nhật tùy ý

    return () => {
      clearInterval(interval); // Dọn dẹp interval khi màn hình bị unmounted
    };
  }, []);
   
   const navigation = useNavigation();
   const onbackhomeclick =() =>{
      navigation.navigate('device');
   }
   const switch_after =() =>{
     let a = parseInt(time);
     if(a>0){
        setTimeout(postToAdafruitIO,a*1000);
     }
   }
  return (    
    <View>
    <View style={{flexDirection:'row',marginTop:40}}>
    <TouchableOpacity onPress={onbackhomeclick}>
    <Ionicons name="arrow-back-outline" size={24} color="black"/>
    </TouchableOpacity>
    <Text style={{fontSize:20,marginLeft:120,fontWeight:'bold'}}>Điều khiển đèn</Text>
    </View>
    <View style ={{backgroundColor:'#D5DBDB',height:'100%',marginTop:10}}>
    <View style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            borderRadius: 10,
            justifyContent :'Center',
            }}>
        <View style={{marginTop:20,marginLeft:10,marginRight:10,justifyContent:'center',alignItems:'center'}}>
            <Text>Loại thiết bị : đèn</Text>
            <FontAwesome5 name="lightbulb" size={40} color="black" />
            <Text>Trạng thái hiện tại :{feedData ? feedData.last_value : 'Chưa có dữ liệu'}</Text>
        </View>
    </View>
    <View style={{
            backgroundColor: "#FBFCFC",
            margin: 20,
            borderRadius: 10,
            justifyContent :'Center',
            alignItems:'center',
            flex:1
            }}>           
         <Text style={{marginTop:10}}>Ấn vào phần bên dưới để thay đổi trạng thái </Text>
         <TouchableOpacity style={{width:'80%',height:'40%',borderWidth:2,borderRadius:20,marginTop:10,justifyContent:'center',alignItems:'center'}} onPress={postToAdafruitIO}>
         <MaterialCommunityIcons name="gesture-tap-button" size={100} color="black" />
         </TouchableOpacity>
         <View style={{width:'80%',height:40, marginTop:10,borderRadius:20, borderWidth:2,justifyContent:'center',alignItems:'center'}}>
            <Text>Kết quả là :{results}</Text>
         </View>
         <Text style={{marginTop:10,fontSize:15}}>Tự động:</Text>
         <View style={{marginTop:10,flexDirection:'row'}}>
         <TouchableOpacity style ={{width:100,height:100,marginLeft:20,borderRadius:20,borderWidth:2,justifyContent:'center',alignItems:'center'}} onPress={switch_after}>
            <AntDesign name="clockcircleo" size={40} color="black" />
            <Text>Ấn để đặt</Text>
          </TouchableOpacity>
            <TextInput style={{marginLeft:10}} placeholder={'Tự động thay đổi trạng thái sau (Giây)'} value={time} onChangeText={onTimeclick}/>
         </View>
    </View>
    </View>
    </View>
  );
}

export default Lamp_screen;