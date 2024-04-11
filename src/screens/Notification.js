import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";

import { Ionicons, Feather } from "react-native-vector-icons";

const Notification = () => {
    return(
        <View className="w-full pt-9">
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
                <View className="container flex flex-row items-center mt-4 bg-blue-700 rounded-lg h-32">
                    <Ionicons
                        name="information-circle-outline"
                        size={30}
                        className="ml-2 mr-4 text-white"
                    />
                    <Text className="text-lg text-white pr-16">Lorem ipsum dolor sit amet consectetur. 
                    Pretium diam ipsum leo pretium nisl arcu nulla et morbi.</Text>
                </View>
                <View className="container flex flex-row items-center mt-4 bg-blue-700 rounded-lg h-32">
                    <Ionicons
                        name="information-circle-outline"
                        size={30}
                        className="ml-2 mr-4 text-white"
                    />
                    <Text className="text-lg text-white pr-16">Lorem ipsum dolor sit amet consectetur. 
                    Pretium diam ipsum leo pretium nisl arcu nulla et morbi.</Text>
                </View>
                <View className="container flex flex-row items-center mt-4 bg-blue-700 rounded-lg h-32">
                    <Ionicons
                        name="information-circle-outline"
                        size={30}
                        className="ml-2 mr-4 text-white"
                    />
                    <Text className="text-lg text-white pr-16">Lorem ipsum dolor sit amet consectetur. 
                    Pretium diam ipsum leo pretium nisl arcu nulla et morbi.</Text>
                </View>
                <View className="container flex flex-row items-center mt-4 bg-blue-700 rounded-lg h-32">
                    <Ionicons
                        name="information-circle-outline"
                        size={30}
                        className="ml-2 mr-4 text-white"
                    />
                    <Text className="text-lg text-white pr-16">Lorem ipsum dolor sit amet consectetur. 
                    Pretium diam ipsum leo pretium nisl arcu nulla et morbi.</Text>
                </View>
                <View className="container flex flex-row items-center mt-4 bg-blue-700 rounded-lg h-32">
                    <Ionicons
                        name="information-circle-outline"
                        size={30}
                        className="ml-2 mr-4 text-white"
                    />
                    <Text className="text-lg text-white pr-16">Lorem ipsum dolor sit amet consectetur. 
                    Pretium diam ipsum leo pretium nisl arcu nulla et morbi.</Text>
                </View>
                <View className="container flex flex-row items-center mt-4 bg-blue-700 rounded-lg h-32">
                    <Ionicons
                        name="information-circle-outline"
                        size={30}
                        className="ml-2 mr-4 text-white"
                    />
                    <Text className="text-lg text-white pr-16">Lorem ipsum dolor sit amet consectetur. 
                    Pretium diam ipsum leo pretium nisl arcu nulla et morbi.</Text>
                </View>
            </View>
        </View>
    );
}

export default Notification;