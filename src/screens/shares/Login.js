import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage"; 

import logo from "../../../assets/logo.png";
import homeJson from "../../../assets/home_1.json";

export default Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.154.235:4000/users/login', {
        email: email,
        password: password
      });
      user=response.data.role
      console.log(response)
      AsyncStorage.setItem("isLoggedIn", "true");
      if (user ==="saler")  AsyncStorage.setItem("userRole", "saler"); 
      if (user ==="user")  AsyncStorage.setItem("userRole", "customer"); 
      if (user ==="customer")  AsyncStorage.setItem("userRole", "customer"); 
      if (user ==="admin")  AsyncStorage.setItem("userRole", "admin"); 
    
      AsyncStorage.setItem("ID",response.data._id)
      navigation.navigate("Main")
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View className="flex-1 items-center pb-10 pt-10">
      <Text className="font-bold text-2xl">Welcome back!</Text>
      <Image source={logo} className="h-1/5 aspect-[2/1]" />
      <LottieView
        source={homeJson}
        autoPlay
        loop
        style={{ width: 280, height: 280 }}
      />
      <View className="w-4/5 mb-2">
        <TextInput
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 text-left py-2 pl-3"
          placeholder="Nhập địa chỉ Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          required
          value={email}
          onChangeText={setEmail}
        ></TextInput>
      </View>
      <View className="w-4/5">
        <TextInput
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block text-left py-2 pl-3"
          placeholder="Nhập mật khẩu"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          required
          value={password}
          onChangeText={setPassword}
        ></TextInput>
      </View>
      <TouchableOpacity
        className="w-4/5 p-2"
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text className="text-right text-bluebg">Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="py-3 px-8 mt-6 bg-bluebg rounded-md w-[280] flex items-center"
        onPress={handleLogin}
      >
        <Text className="text-xl text-white">Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text className="pt-2">
          Bạn chưa có tài khoản ? <Text className="text-bluebg">Đăng ký</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
