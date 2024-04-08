import React from "react";
import { View, Text, Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import logo from "../assets/logo.png"
import homeJson from "../assets/home_2.json";
import { useNavigation } from '@react-navigation/native';
export default Splash = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        console.log("Button pressed");
        navigation.navigate('Login');
    };
    return (
    <TailwindProvider>
      <View className='flex-1 items-center pb-10'>
        <LottieView 
          source={homeJson}
          autoPlay
          loop
          style={{width: 500, height: 350}}
        />
        <Text className='font-bold text-2xl'>Welcome to</Text>
        <Image 
          source={logo}
          className="h-1/5 aspect-[2/1]"
        />       
        <Text className='text-xl text-center text-bluebg font-medium'>Nhà không cần quá lớn  {'\n'} Chỉ cần chứa những gì bạn yêu</Text>
        <TouchableOpacity onPress={handlePress} className='py-4 px-8 m-4 bg-bluebg rounded-3xl w-[150] flex items-center'><Text className='text-xl text-white'>Login</Text></TouchableOpacity>
        <TouchableOpacity onPress={handlePress} className='py-4 px-8 bg-bluebg rounded-3xl w-[150]  flex items-center'><Text className='text-xl text-white'>Sign Up</Text></TouchableOpacity>
      </View>
    </TailwindProvider>
  );
};
