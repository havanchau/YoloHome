import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView} from "react-native";
import { Ionicons, Feather } from "react-native-vector-icons";

import airCondition from "../../assets/airCondition.jpg"

const PowerConsump = () => {
    return (
    <ScrollView className="w-full">
        <View className="flex flex-row items-center">
            <Ionicons
                name="arrow-back-outline"
                size={25}
                className="ml-2 mr-4 text-black"
            />
            <Text className="text-lg text-black font-bold">
                Năng lượng thiết bị sử dụng
            </Text>
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
                    value="Phòng ngủ A"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text className="font-bold">
                        Hãng
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="Panasonic"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text className="font-bold">
                        Công suất
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="810 - 1100W"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text className="font-bold">
                        Thời gian hoạt động
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="07 : 45 : 50"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text className="font-bold">
                        Tổng lượng điện năng tiêu thụ
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="7.5kW"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
                <View className='mb-2'>
                    <Text className="font-bold">
                        Năng lượng sử dụng trung bình một ngày
                    </Text>
                    <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
                    value="7.5kW"
                    autoCapitalize="none"
                    autoCorrect={false}
                    required></TextInput>
                </View>
            </View>
        </View>
    </ScrollView>
    );
}

export default PowerConsump;