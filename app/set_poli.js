import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Set_policy = () => {
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
    <Text style={{fontSize:20,marginLeft:120,fontWeight:'bold'}}>Policy service</Text>
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
                <Text style ={{fontWeight:'bold'}}>Chính sách Sử dụng Dịch vụ:</Text>
                <Text style ={{fontSize:15}}>Điều này mô tả cách người dùng được phép sử dụng dịch vụ của bạn và bất kỳ hạn chế nào về việc sử dụng.</Text>
                <Text style ={{fontWeight:'bold'}}>Chính sách Bảo mật:</Text>
                <Text style ={{fontSize:15}}>Chính sách này quy định cách thông tin cá nhân của người dùng được thu thập, sử dụng và bảo vệ. Nó cũng có thể bao gồm thông tin về việc sử dụng cookie và công nghệ tương tự.</Text>
                <Text style ={{fontWeight:'bold'}}>Chính sách Thanh toán và Giao dịch:</Text>
                <Text style ={{fontSize:15}}>Nếu bạn cung cấp các dịch vụ hoặc sản phẩm trả phí, chính sách này mô tả cách thanh toán được xử lý, chính sách hoàn trả (nếu có), và bảo mật thông tin giao dịch.</Text>
                <Text style ={{fontWeight:'bold'}}>Chính sách Điều kiện Sử dụng:</Text>
                <Text style ={{fontSize:15}}>Điều này liệt kê các điều kiện mà người dùng phải đồng ý trước khi sử dụng dịch vụ của bạn, bao gồm cả độ tuổi, quyền truy cập và việc cung cấp thông tin đúng và chính xác.</Text>
                <Text style ={{fontWeight:'bold'}}>Chính sách Chấm dứt Tài khoản:</Text>
                <Text style ={{fontSize:15}}>Mô tả điều kiện dẫn đến việc chấm dứt tài khoản người dùng, bao gồm vi phạm điều khoản dịch vụ và các hành vi không đúng đắn.</Text>
                <Text style ={{fontWeight:'bold'}}>Chính sách Quyền sở hữu Trí tuệ:</Text>
                <Text style ={{fontSize:15}}>Quy định về việc sở hữu trí tuệ, bản quyền, và quyền thương hiệu liên quan đến dịch vụ hoặc sản phẩm của bạn.</Text>
                <Text style ={{fontWeight:'bold'}}>Chính sách Đánh giá và Nhận xét:</Text>
                <Text style ={{fontSize:15}}>Chính sách này quy định cách người dùng có thể đăng đánh giá và nhận xét về dịch vụ của bạn trên nền tảng của bạn.</Text>
                <Text style ={{fontWeight:'bold'}}>Chính sách Cập nhật Dịch vụ:</Text>
                <Text style ={{fontSize:15}}>Mô tả quy trình cập nhật dịch vụ, bao gồm cách thông báo và quyền của bạn thay đổi dịch vụ.</Text>
        </View>
    </View>
    </View>
    </View>
  );
}

export default Set_policy;