import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import { Ionicons, Feather } from "react-native-vector-icons";

import airCondition from "../assets/airCondition.jpg"

const DeleteDevice = () => {
    return (
    <View className="w-full pt-10">
        <View className="flex flex-row justify-between">
            <Ionicons
                name="arrow-back-outline"
                size={25}
                className="ml-2 mr-4 text-black"
            />
            <Text className="text-lg text-black font-bold">
                Thông tin thiết bị
            </Text>
            <Ionicons
                name="wifi-outline"
                size={25}
                className="ml-2 mr-4 text-sky-500"
            />
        </View>
        <View>
            <Text className="font-bold text-xl pt-6">
                Máy lạnh
            </Text>
            <View className="items-center">
                <Image
                    source={airCondition} 
                    style={{width:360, height:150}}
                />
            </View>
            <View className="items-center">
                <View className='mb-2'>
                    <Text>
                        Phòng
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="Phòng ngủ A"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text>
                        Hãng
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="Panasonic"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text>
                        Công suất
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="810 - 1100W"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text>
                        Thời gian hoạt động
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="07 : 45 : 50"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text>
                        Ngày bảo trì gần nhất
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="16/02/2024"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text>
                        Ngày bảo trì tiếp theo
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="16/05/2024"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className="flex flex-row gap-x-2.5">
                    <TouchableOpacity
                        onPress=""
                        className="w-32 h-12 items-center flex bg-blue-700 justify-center rounded-xl mt-8"
                    >
                        <Text className="text-lg font-semibold text-white">Chỉnh sửa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress=""
                    className="w-32 h-12 items-center flex bg-red-700 justify-center rounded-xl mt-8"
                    >
                        <Text className="text-lg font-semibold text-white">Xóa</Text>
                    </TouchableOpacity>
                </View>                
            </View>
        </View>
    </View>
    );
}

export default DeleteDevice;