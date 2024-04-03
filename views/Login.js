import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import logo from "../assets/logo.png"
import homeJson from "../assets/home_1.json";

export default Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <TailwindProvider>
      <View className='flex-1 items-center pb-10 pt-10'>
        <Text className='font-bold text-2xl'>Welcome back!</Text>
        <Image 
          source={logo}
          className="w-[280] h-[140]"
        />    
        <LottieView 
          source={homeJson}
          autoPlay
          loop
          style={{width: 350, height: 300}}
        />           
        <View className='mb-4'>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[280] pl-5 pr-40 py-4 text-left'
          placeholder="Nhập địa chỉ Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[280] pl-5 pr-40 py-4 text-left'
          placeholder="Nhập mật khẩu"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <TouchableOpacity className='py-4 px-8 m-12 bg-bluebg rounded-md'><Text className='text-xl text-white'>Đăng nhập</Text></TouchableOpacity>
      </View>
    </TailwindProvider>
  );
};
