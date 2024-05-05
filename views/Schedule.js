import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity,ScrollView} from "react-native";
import { TailwindProvider } from 'tailwindcss-react-native';
import SearchBar from '../assets/components/SearchBar'
import { useNavigation } from '@react-navigation/native';
export default UserManagement = () => {
  const navigation = useNavigation();

  const userList = [
    { id: 1, name: 'Quạt', status: 'Online', imageUri: 'https://c.pxhere.com/photos/1d/04/electric_fan_wind_ceiling-946062.jpg!d'},
    { id: 2, name: 'Đèn', status: 'Online', imageUri: 'https://quatviet.net/wp-content/uploads/2019/10/Den-trang-tri-TT5.gif' },
    { id: 3, name: 'Loa', status: 'Online', imageUri: 'https://bizweb.dktcdn.net/100/444/272/products/panasonic-nr-tv261apsv-3-1.jpg?v=1640344856710' },
    { id: 4, name: 'Cảm biến nhiệt', status: 'Online', imageUri: 'https://icdn.dantri.com.vn/oaKoww9ZmEdAys7kKq3tLCCQS3fXEK/Image/2015/04/4K-1-f964f.jpg' },
   
  ];
  const handlePress = (item) => {
    console.log("Button pressed", item.name);
    switch (item.name) {
      case 'Quạt':
        navigation.navigate('infoFan');
        break;
      case 'Đèn':
        navigation.navigate('infoLight');
        break;
      case 'Loa':
        navigation.navigate('infoSpeaker');
        break;
      case 'Điều Hòa':
        navigation.navigate('infoDieuHoa');
        break;
      case 'Cảm biến nhiệt':
        navigation.navigate('infoTemperatureSensor');
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


