import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity,ScrollView} from "react-native";
import { TailwindProvider } from 'tailwindcss-react-native';
import SearchBar from '../assets/components/SearchBar'
import { useNavigation } from '@react-navigation/native';
export default UserManagement = () => {
  const navigation = useNavigation();

  const userList = [
    { id: 1, name: 'Quạt', status: 'Online', imageUri: 'https://c.pxhere.com/photos/1d/04/electric_fan_wind_ceiling-946062.jpg!d'},
    { id: 2, name: 'Đèn trần', status: 'Online', imageUri: 'https://quatviet.net/wp-content/uploads/2019/10/Den-trang-tri-TT5.gif' },
    { id: 3, name: 'Bếp điện', status: 'Online', imageUri: 'https://bepnamanh.com/images/2018/top-cac-mau-bep-tu-doi-nhap-khau-dung-tot-gia-lai-vo-cung-hop-ly.png' },
    { id: 4, name: 'Tủ lạnh', status: 'Online', imageUri: 'https://bizweb.dktcdn.net/100/444/272/products/panasonic-nr-tv261apsv-3-1.jpg?v=1640344856710' },
   
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
        navigation.navigate('infoMaNongLanh');
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


