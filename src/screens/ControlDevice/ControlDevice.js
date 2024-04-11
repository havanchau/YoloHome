import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity,ScrollView} from "react-native";
import { TailwindProvider } from 'tailwindcss-react-native';
import trash from '../../../assets/trash.png';
import plus from '../../../assets/plus.png';
import edit from '../../../assets/edit.png';
import { useNavigation } from '@react-navigation/native';
export default ControlDevice = () => {
  const navigation = useNavigation();

  const userList = [
    { id: 1, name: 'Mohammed Ali', status: 'Son', imageUri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHx8fHwxNzEyNDI2MTMxfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' },
    { id: 2, name: 'Isabella Rodríguez', status: 'Daughter', imageUri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwzfHxhdmF0YXJ8ZW58MHx8fHwxNzEyNDI2MTMxfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' },
    { id: 3, name: 'Emily Roberts', status: 'Younger brother', imageUri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw4fHxhdmF0YXJ8ZW58MHx8fHwxNzEyNDI2MTMxfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' },
    { id: 4, name: 'Anthony Moore', status: 'Mom', imageUri: 'https://plus.unsplash.com/premium_photo-1693000697544-9bf6f009cba9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxMTd8fGF2YXRhcnxlbnwwfHx8fDE3MTI0NzU2MzF8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' },
    { id: 5, name: 'María Fernanda', status: 'Wife', imageUri: 'https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw1fHxhdmF0YXJ8ZW58MHx8fHwxNzEyNDI2MTMxfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450' },


  ];
  return (
    <TailwindProvider>
      <View className='flex-1 items-center pb-10 pt-10'>
        <ScrollView>
        {userList.map( user => (
            <View className='mb-2'>
            <View className='flex flex-row w-[360] h-[80]  border border-gray-300 rounded-xl bg-white items-center content-center'>
                <View className='w-[280] h-[80] flex flex-row place-content-center'>
                    <Image
                    className='w-[50] h-[50] rounded-full m-4'
                    source={{uri:user.imageUri}}
                    />
                    <View className='my-4'>
                        <Text className='font-bold text-bluebg text-xl'>{user.name}</Text>
                        <Text className='text-gray-400'>{user.status}</Text>
                    </View>
                </View>
                <View className='flex flex-row space-x-2'>
                    <TouchableOpacity  onPress={()=>navigation.navigate('AccessDevice')}>
                    <Image source={edit} className="w-[30] h-[30]"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={trash} className="w-[30] h-[30]"/>
                    </TouchableOpacity>
                </View>

            </View>
            </View>
           
               

          ))}
        </ScrollView>
        <View className = 'w-[280] h-[80]'>
            <TouchableOpacity className='py-3 px-8 mt-6 bg-bluebg rounded-md items-center'>
                <View className='flex flex-row items-center space-x-2'>
                    <Image source={plus} className='w-[20] h-[20]'/>
                    <Text className='text-base text-white'>Thêm người dùng</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </TailwindProvider>
  );
};
