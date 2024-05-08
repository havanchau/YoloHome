import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView} from "react-native";

import { Ionicons, Feather } from "react-native-vector-icons";

import {CORLOR} from "../../constants"

const notifications = [
    {
        id: 1,
        content:
        "Máy lạnh phòng ngủ 1 bật."
    },
    {
        id: 2,
        content:
        "Tivi phòng ngủ 2 hoạt động 12 tiếng liên tục."
    },
    {
        id: 3,
        content:
        "Camera cửa trước phát hiện có người."
    },
  ];

const Notification = () => {
    return(
        <ScrollView className="w-full">
            <View className="flex flex-row justify-items-center">
                <Ionicons
                    name="arrow-back-outline"
                    size={25}
                    className="ml-2 mr-4 text-black"
                />
                <Text className="text-lg text-black font-bold">
                    Thông báo
                </Text>
            </View>
            <View className="px-8">
                {notifications.map((notification) => (
                <View key={notification.id} className="container flex flex-row items-center mt-4 bg-blue-300 rounded-lg">
                    <Ionicons
                        name="information-circle-outline"
                        size={30}
                        className="ml-2 mr-4 text-black"
                    />
                    <Text className="text-lg text-black pr-16">
                        {notification.content}
                    </Text>
                </View>
                ))}
            </View>
        </ScrollView>
    );
}

export default Notification;