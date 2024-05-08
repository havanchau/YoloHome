import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';


export default ConfirmCode = () => {
  const navigation = useNavigation();
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  return (
    <TailwindProvider>
      <View className='flex-1 py-10 px-5'>

        <Text className='mb-5 font-bold text-3xl text-sky-400 '>Please check your email!</Text>
        <View className='items-center'>
            <View className='flex flex-col space-y-16'>
                <View className="flex flex-row items-center justify-between mx-auto w-full max-w-xs space-x-6">
                    <View className="w-16 h-16 ">
                        <TextInput
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={1}
                        onChange={(e)=>setOTPinput([
                            e.target.value,
                            OTPinput[1],
                            OTPinput[2],
                            OTPinput[3],
                        ])}
                        required>
                        </TextInput>
                    </View>
                    <View className="w-16 h-16 ">
                        <TextInput
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={1}
                        onChange={(e)=>setOTPinput([
                            OTPinput[0],
                            e.target.value,
                            OTPinput[2],
                            OTPinput[3],
                        ])}
                        required>
                        </TextInput>
                    </View>
                    <View className="w-16 h-16 ">
                        <TextInput
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={1}
                        onChange={(e)=>setOTPinput([
                            OTPinput[0],
                            OTPinput[1],
                            e.target.value,,
                            OTPinput[3],
                        ])}
                        required>
                        </TextInput>
                    </View>
                    <View className="w-16 h-16 ">
                        <TextInput
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={1}
                        onChange={(e)=>setOTPinput([
                            OTPinput[0],
                            OTPinput[1],
                            OTPinput[2],
                            e.target.value,
                        ])}
                        required>
                        </TextInput>
                    </View>
                   
                </View>
            </View>
            <View className='w-[280] h-[80]'>
                <TouchableOpacity className='py-3 px-8 mt-6 bg-bluebg rounded-md flex-1 items-center' onPress={()=>navigation.navigate('ResetPassword')}><Text className='text-xl text-white'>Xác nhận</Text></TouchableOpacity>
            </View>
            <View className="pt-3 flex-row justify-center ">
                <Text> Bạn không nhận được mã? </Text>
                <TouchableOpacity> 
                    <Text className=' text-bluebg' >Gửi lại mã</Text> 
                </TouchableOpacity>
            </View>
        </View>
        
      </View>
    </TailwindProvider>
  );
};