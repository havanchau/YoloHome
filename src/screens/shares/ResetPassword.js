import React, { useState, useEffect } from "react";
import { View, Text, TextInput,ToastAndroid,TouchableOpacity} from "react-native";

import { styled, TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';



export default ResetPassword = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <TailwindProvider>
        <View className='flex-1 py-10 px-5'>

        <Text className='mb-5 font-bold text-3xl text-sky-400 '>Reset Password</Text>
        <Text className='mb-5 text-base'>Vui lòng nhập mật khẩu nào đó bạn sẽ nhớ.</Text>

        <View className='items-center'>
        <View className='mb-2'>
        <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[350] pl-5 pr-40 py-3 text-left'
        placeholder="Nhập mật khẩu"
        secureTextEntry={!passwordVisible}
        autoCapitalize="none"
        autoCorrect={false}
        required>

        </TextInput>
        </View>
        <View>
        <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[350] pl-5 pr-40 py-3 text-left'
        placeholder="Xác nhận lại mật khẩu"
        secureTextEntry={!passwordVisible}
        autoCapitalize="none"
        autoCorrect={false}
        required>

        </TextInput>
        </View>
            <View className='w-[280] h-[80]'>
                <TouchableOpacity className='py-3 px-8 mt-6 bg-bluebg rounded-md flex-1 items-center' onPress={()=>navigation.navigate('Login')}><Text className='text-xl text-white'>Đổi mật khẩu</Text></TouchableOpacity>
            </View>
            <View className="pt-3 flex-row justify-center">
                <Text> Bạn đã có tài khoản? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}> 
                    <Text className=' text-bluebg' >Đăng nhập</Text> 
                </TouchableOpacity>
            </View>
        </View>

        </View>

      
    </TailwindProvider>
  );
};