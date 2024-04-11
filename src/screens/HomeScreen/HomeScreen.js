import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';



export default HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <TailwindProvider>
      <View className='flex-1 items-center pb-10 pt-10 space-y-16'>
        <View className = 'w-[280] h-[80]'>
            <TouchableOpacity className='py-3 px-8 mt-6 bg-bluebg rounded-md  flex-1 items-center' onPress={()=>navigation.navigate('User Management')}>
                <Text className='text-base text-white'>Quản lí người dùng</Text>
            </TouchableOpacity>
        </View>
        <View className = 'w-[280] h-[80]'>
            <TouchableOpacity className='py-3 px-8 mt-6 bg-bluebg rounded-md  flex-1 items-center' onPress={()=>navigation.navigate('ControlDevice')}>
                <Text className='text-base text-white'>Quyền điều khiển thiết bị</Text>
            </TouchableOpacity>
        </View>
 
      </View>
    </TailwindProvider>
  );
};