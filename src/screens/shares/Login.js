import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";

import logo from "../../../assets/logo.png";
import homeJson from "../../../assets/home_1.json";

export default Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePress = () => {
    console.log("Button pressed");
    navigation.navigate("UserManagement");
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
        onPress={handlePress}
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
