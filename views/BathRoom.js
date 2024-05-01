import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity,ScrollView} from "react-native";
import { TailwindProvider } from 'tailwindcss-react-native';
import SearchBar from '../assets/components/SearchBar'
import { useNavigation } from '@react-navigation/native';
export default UserManagement = () => {
  const navigation = useNavigation();

  const userList = [
    
    { id: 1, name: 'Đèn trần', status: 'Online', imageUri: 'https://quatviet.net/wp-content/uploads/2019/10/Den-trang-tri-TT5.gif' },
    { id: 2, name: 'Máy Nóng Lạnh', status: 'Online', imageUri: 'https://empiregroup.com.vn/wp-content/uploads/2022/08/MAY-NUOC-NONG.jpg' },
   
  ];
  const handlePress = (item) => {
    console.log("Button pressed", item.name);
    switch (item.name) {
      case 'Quạt':
        navigation.navigate('infoQuat');
        break;
      case 'Đèn trần':
        navigation.navigate('infoDenTran');
        break;
      case 'Bếp điện':
        navigation.navigate('infoBepDien');
        break;
      case 'Tủ lạnh':
        navigation.navigate('infoTuLanh');
        break;
      case 'Đèn Chùm':
        navigation.navigate('infoDenChum');
        break;
      case 'Điều Hòa':
        navigation.navigate('infoDieuHoa');
        break;
      case 'Máy Nóng Lạnh':
        navigation.navigate('infoMayNongLanh');
        break;
      case 'Ti vi':
        navigation.navigate('infoTivi');
        break;
      default:
        break;
    }    

  };
  return (
    <TailwindProvider>
      <View className='flex-1 items-center pb-10 pt-10'>
        <SearchBar></SearchBar>
        <ScrollView className='pt-6'>
        {userList.map( user => (
          <TouchableOpacity className='flex flex-row w-[280] py-2 items-center' onPress={() => handlePress(user)}>
                <Image
                className='w-[50] h-[50] rounded-full mr-4'
                source={{uri:user.imageUri}}
                />
                <View>
                    <Text className='font-bold text-bluebg text-xl'>{user.name}</Text>
                    <Text className='text-green-600'>Đang bật</Text>
                </View>
                <Text className='ml-auto text-sm text-gray-400'>Xem thêm</Text>
          </TouchableOpacity>))}
        </ScrollView>
      </View>
    </TailwindProvider>
  );
};


