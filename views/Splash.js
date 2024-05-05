import React from "react";
import { View, Text, Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import logo from "../assets/logo.png"
import homeJson1 from "../assets/home_1.json"; 
import { useNavigation } from '@react-navigation/native';

export default Splash = () => {
    const navigation = useNavigation();
    const SchedulePress = () => {
        console.log("Button pressed");
        navigation.navigate('Schedule');
    };
    const historyPress = () => {
        console.log("Button pressed");
        navigation.navigate('History');
    };


    return (
    <TailwindProvider>
      <View className='flex-1 items-center pb-10'>
        <LottieView 
          source={homeJson1}
          autoPlay
          loop
          style={{width: 35, height: 30}}
        />  
        <Text className='font-bold text-2xl'>Welcome to</Text>
        <Image 
          source={logo}
          className="w-[100] h-[50]"
        />       
        <Text className='text-xl text-center text-bluebg font-medium'>Nhà không cần quá lớn  {'\n'} Chỉ cần chứa những gì bạn yêu</Text>
        <TouchableOpacity onPress={SchedulePress} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'><Text className='text-xl text-white'>Quản lý lịch trình</Text></TouchableOpacity>
        <TouchableOpacity onPress={historyPress} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'><Text className='text-xl text-white'>Lịch sử hoạt động</Text></TouchableOpacity>
      </View>
    </TailwindProvider>
  );
};

