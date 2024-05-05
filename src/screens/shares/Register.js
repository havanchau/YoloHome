import React, { useState, useEffect} from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import homeJson from "../../../assets/home_1.json";

export default Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePress = () => {
    console.log("Button pressed");
    navigation.navigate('Login');
  };
  const [selectedOption, setSelectedOption] = useState('');
  const [houseId, setHouseId] = useState('');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setHouseId(''); // Reset houseId when option changes
  };

  
  return (
    <TailwindProvider>
      <View className='flex-1 items-center pb-10 pt-5'>
        <Text className='font-bold text-3xl text-sky-400'>Sign up</Text>

        <LottieView 
          source={homeJson}
          autoPlay
          loop
          style={{width: 350, height: 260}}
        />           
        <View className='mb-2'>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5  py-3 text-left'
          placeholder="Nhập tên người dùng"
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View className='mb-2'>
         <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5 py-3 text-left'
          placeholder="Nhập địa chỉ Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View className='mb-2'>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5 py-3 text-left'
          placeholder="Nhập mật khẩu"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[330] pl-5  py-3 text-left'
          placeholder="Xác nhận lại mật khẩu"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View className='w-[330] h-[60] flex flex-row items-center space-x-2 mt-2'>
          <View className=' ml-3 w-[80] h-[40] border rounded-xl bg-slate-50 '>
            
            <RNPickerSelect
              
              onValueChange={(value) => handleOptionChange(value)}
              items={[
                { label: 'Tạo nhà', value: 'create' },
                { label: 'Chọn nhà', value: 'choose' },
              ]}
            >
            </RNPickerSelect> 
          </View>
          {selectedOption === 'choose' && (
              <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[230] pl-5 py-3 text-left'
                placeholder="Chọn ID nhà"
                value={houseId}
                onChangeText={(text) => setHouseId(text)}
                // Thực hiện logic để chọn ID nhà từ danh sách có sẵn nếu cần
              />
            )}
          {selectedOption === 'create' && (
            <Text className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-[230] pl-5  py-3 text-left'>Tạo nhà</Text>
          )}

        </View>
        

        <View className = 'w-[280] h-[80]'>
            <TouchableOpacity className='py-3 px-8 mt-6 bg-bluebg rounded-md  flex-1 items-center' onPress={handlePress}>
                <Text className='text-xl text-white'>Đăng ký</Text>
            </TouchableOpacity>
        </View>

        <View className="pt-2 flex-row justify-center">
          <Text> Bạn đã có tài khoản ? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}> 
            <Text className=' text-bluebg' >Đăng nhập</Text> 
          </TouchableOpacity>
        </View>
      </View>
    </TailwindProvider>
  );
};