import React from "react";
import { View, Text, Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import logo from "../assets/logo.png"
import homeJson1 from "../assets/home_1.json"; 
import { useNavigation } from '@react-navigation/native';

export default Splash = () => {
    const navigation = useNavigation();
    const kitchenPress = () => {
        console.log("Button pressed");
        navigation.navigate('Kitchen');
    };
    const livingroomPress = () => {
        console.log("Button pressed");
        navigation.navigate('LivingRoom');
    };

    const bedroomPress = () => {
        console.log("Button pressed");
        navigation.navigate('BedRoom');
    };

    const bathroomPress = () => {
        console.log("Button pressed");
        navigation.navigate('BathRoom');
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
        <TouchableOpacity onPress={kitchenPress} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'><Text className='text-xl text-white'>Kitchen</Text></TouchableOpacity>
        <TouchableOpacity onPress={livingroomPress} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'><Text className='text-xl text-white'>Living Room</Text></TouchableOpacity>
        <TouchableOpacity onPress={bathroomPress} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'><Text className='text-xl text-white'>Bath Room</Text></TouchableOpacity>
        <TouchableOpacity onPress={bedroomPress} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'><Text className='text-xl text-white'>Bed Room</Text></TouchableOpacity>

      </View>
    </TailwindProvider>
  );
};

