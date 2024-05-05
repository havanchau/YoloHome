import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";

import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';



export default ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <TailwindProvider>
      <View className='flex-1 py-10 px-5'>

        <Text className='mb-5 font-bold text-3xl text-sky-400 '>Forgot Password?</Text>
        <Text className='mb-5 text-base'>Đừng lo lắng về việc nó xảy ra! Vui lòng nhập email liên kết với tài khoản của bạn.</Text>
        {/* <Image 
          source={logo}
          className="w-[280] h-[140]"
        />     */}
        {/* <LottieView 
          source={homeJson}
          autoPlay
          loop
          style={{width: 350, height: 260}}
        />            */}
        <View className='items-center'>
            <View>
                <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[360] pl-5 pr-40 py-3 text-left'
                placeholder="Nhập địa chỉ Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                required>
                </TextInput>
            </View>
            <View className='w-[280] h-[80]'>
                <TouchableOpacity className='py-3 px-8 mt-6 bg-bluebg rounded-md flex-1 items-center' onPress={()=>navigation.navigate('ConfirmCode')}><Text className='text-xl text-white'>Gửi mã</Text></TouchableOpacity>
            </View>
            <View className="pt-3 flex-row justify-center">
                <Text> Bạn đã nhớ mật khẩu? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}> 
                    <Text className=' text-bluebg' >Đăng nhập</Text> 
                </TouchableOpacity>
            </View>
        </View>
        
      </View>
    </TailwindProvider>
  );
};