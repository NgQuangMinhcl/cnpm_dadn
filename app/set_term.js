import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Set_term = () => {
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
    <Text style={{fontSize:20,marginLeft:120,fontWeight:'bold'}}>Terms of service</Text>
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
                <Text style ={{fontWeight:'bold'}}>Điều 1: Chấp nhận Điều khoản và Điều kiện:</Text>
                <Text style ={{fontSize:15}}>Bằng cách sử dụng ứng dụng này, bạn đồng ý và cam kết tuân thủ tất cả các điều khoản và điều kiện trong tài liệu này.</Text>
                <Text style ={{fontWeight:'bold'}}>Điều 2: Sử dụng ứng dụng</Text>
                <Text style ={{fontSize:15}}>Ứng dụng smart home được cung cấp cho mục đích cá nhân. Bạn có thể sử dụng  
                ứng dụng cho mục đích cá nhân và không được sử dụng cho các mục đích thương mại</Text>
                <Text style ={{fontWeight:'bold'}}>Điều 3: Đăng ký và Tài khoản:</Text>
                <Text style ={{fontSize:15}}>Để truy cập vào một số tính năng của ứng dụng, bạn có thể cần phải đăng ký và tạo tài khoản. Bạn phải cung cấp thông tin chính xác và cập nhật về mình.Bạn có trách nhiệm bảo đảm về thông tin tài khoản của chính mình</Text>
                <Text style ={{fontWeight:'bold'}}>Điều 4: Bảo mật và Mật khẩu:</Text>
                <Text style ={{fontSize:15}}>Bạn chịu trách nhiệm bảo mật mật khẩu của mình và không được chia sẻ mật khẩu với bất kỳ người nào khác. Chúng tôi không chịu trách nhiệm về việc sử dụng tài khoản của bạn bởi người khác.</Text>
                <Text style ={{fontWeight:'bold'}}>Điều 5: Quyền riêng tư:</Text>
                <Text style ={{fontSize:15}}>Chúng tôi thu thập và sử dụng thông tin cá nhân của bạn theo chính sách quyền riêng tư của chúng tôi. Bằng cách sử dụng ứng dụng này, bạn đồng ý với việc thu thập và sử dụng thông tin của bạn.</Text>
                <Text style ={{fontWeight:'bold'}}>Điều 6: Giới hạn chịu trách nhiệm</Text>
                <Text style ={{fontSize:15}}>Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào gây ra bởi việc sử dụng ứng dụng này hoặc thông tin có trong nó.</Text>
                <Text style ={{fontWeight:'bold'}}>Điều 7: Chấm dứt Tài khoản:</Text>
                <Text style ={{fontSize:15}}>Chúng tôi có quyền chấm dứt tài khoản của bạn nếu bạn vi phạm các điều khoản và điều kiện này hoặc nếu chúng tôi cho rằng việc sử dụng của bạn gây hại cho ứng dụng hoặc người dùng khác.</Text>
                <Text style ={{fontWeight:'bold'}}>Điều 8:  Liên hệ:</Text>
                <Text style ={{fontSize:15}}>Bất kỳ câu hỏi hoặc yêu cầu hỗ trợ nào liên quan đến các điều khoản và điều kiện này nên được gửi đến địa chỉ liên hệ của chúng tôi.Chi tiết liên hệ trong phần application shortcuts</Text>
        </View>
    </View>
    </View>
    </View>
  );
}

export default Set_term;