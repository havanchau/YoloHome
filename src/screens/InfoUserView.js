import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity,ScrollView} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather, Entypo} from 'react-native-vector-icons';
export default InfoUserView = () =>
{   const navigation = useNavigation();
    const linktoInfo = () =>
    {
        navigation.navigate('AccountInfo')
    }
    return(
  
            <View className='flex-1 items-center pt-10'>
                <Image
                className='w-[80] h-[80] rounded-full mr-4'
                source={{uri:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}}
                />
                <Text className='font-bold text-bluebg text-xl pt-2 pb-10'>Amelia Renata</Text>
                <ScrollView>
                    <View className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='time-slot' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Tần suất sử dụng</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <View className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='download' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Xuất báo cáo về người dùng</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={linktoInfo} className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='text-document' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text  className='font-bold text-lg w-[240] '>Thông tin cá nhân</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </TouchableOpacity>
                    <View className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='sweden' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Danh sách thiết bị</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <View className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='back-in-time' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Lịch sử hoạt động</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <View className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-red-400 p-2 mr-3'>
                            <Entypo name='warning' size={20} className='text-red-900'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] text-red-600 '>Đăng xuất</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
    );
}