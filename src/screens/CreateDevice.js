import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";

import { Ionicons, Feather } from "react-native-vector-icons";

import airCondition from "../../assets/airCondition.jpg"

const CreateDevice = () => {
    return (
    <View className="w-full">
        <View className="flex flex-row justify-between">
            <Ionicons
                name="arrow-back-outline"
                size={25}
                className="ml-2 mr-4 text-black"
            />
            <Text className="text-lg text-black font-bold">
                Thêm thiết bị
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
                    style={{width:250, height:100}}
                />
            </View>
            <View className="items-center">
                <View className='mb-2'>
                    <Text className="font-bold">
                        Phòng
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    placeholder="Nhập tên phòng"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text className="font-bold">
                        Hãng
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    placeholder="Nhập tên hãng"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text className="font-bold">
                        Công suất
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    placeholder="Nhập công suất"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <TouchableOpacity
                    onPress=""
                    className="w-full h-12 items-center flex bg-blue-700 justify-center rounded-xl mt-8"
                >
                    <Text className="text-lg font-semibold text-white">Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}

export default CreateDevice;