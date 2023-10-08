import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const image = require('./asset/logobk.png')
const Set_info = () => {
   const navigation = useNavigation();

   const onbackhomeclick =() =>{
    navigation.navigate('setting');
   }
  return (    
    <View>
    <View style={{flexDirection:'row',marginTop:40}}>
    <TouchableOpacity onPress={onbackhomeclick}>
    <Ionicons name="arrow-back-outline" size={24} color="black"/>
    </TouchableOpacity>
    <Text style={{fontSize:20,marginLeft:120,fontWeight:'bold'}}>Introduction</Text>
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
                <Text style ={{fontSize:15}}>Ngày nay, con người chúng ta đang sống trong thời đại mà khoa học - công nghệ phát triển
                    chóng mặt. Khoa học - công nghệ giúp ích rất nhiều cho chúng ta, từ giải trí, học tập cho tới y
                    học... Do đó, nhóm em muốn phát triển một hệ thống nhà thông minh để giúp cho con người
                    có thể điều khiển một số thiết bị trong nhà từ xa và chính hệ thống cũng có thể tự điều khiển
                    các thiết bị đó dựa trên dữ liệu mà nó thu thập được từ cảm biến môi trường.</Text>
                </View>
    </View>
        <View style={{
                backgroundColor: "#FBFCFC",
                margin: 20,
                flex: 1,
                borderRadius: 10,
                justifyContent :'Center',
                marginTop:20
                }}>
                <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
                <Text>Nhóm sinh viên thực hiện :</Text>
                <Text>          Nguyễn Quang Minh - 2111753</Text>
                <Text>          Chu Văn Lợi - 2013703</Text>
                <Text>          Nguyễn Thị Bích Phương - 2120054</Text>
                <Text>          Võ Mai Phương - 2114485</Text>
                <Text>Giảng viên hướng dẫn : Trần Thanh Bình</Text>
                </View>
        </View>
        <View style={{
                backgroundColor: "#FBFCFC",
                margin: 20,
                flex: 2,
                borderRadius: 10,
                justifyContent :'Center',
                marginTop:20
                }}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={image} resizeMode="cover" style={{width : 100,height:100,borderRadius:50,borderWidth:5,borderColor:'white'}}></Image>
                </View>
                <View style={{marginLeft:10}}>
                <Text>Đại học Quốc Gia TPHCM</Text>
                <Text>Trường đại học Bách Khoa</Text>
                <Text>Liên hệ :  268 Lý Thường Kiệt, P.14, Q.10, TP.HCM</Text>
                <Text>Số điện thoại :  (028) 38 651 670 - (028) 38 647 256 (Ext: 5258, 5234)</Text>
                </View>
        </View>
    </View>
    </View>
  );
}

export default Set_info;