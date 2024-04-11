import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";

import { Ionicons, Feather } from "react-native-vector-icons";
import lockDoor from "../../assets/lockDoor.jpg"

const AddDevice = () => {
    return (
    <View className="w-full pt-10">
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
                name="qr-code-outline"
                size={25}
                className="ml-2 mr-4 text-sky-500"
            />
        </View>
        <View className="flex flex-row px-8">
            <View className="basis-1/4 flex flex-col space-y-4">
                <Text>
                    Thiết bị điện
                </Text>
                <Text>
                    Thiết bị đèn
                </Text>
                <Text>
                    Cảm biến an ninh
                </Text>
                <Text>
                    Đồ gia dụng nhỏ
                </Text>
                <Text>
                    Đồ gia dụng lớn
                </Text>
                <Text>
                    Thiết bị nhà bếp
                </Text>
                <Text>
                    Thể thao và sức khỏe
                </Text>
                <Text className="font-bold">
                    Máy quay và khóa
                </Text>
                <Text>
                    Điều khiển cổng
                </Text>
                <Text>
                    Năng lượng
                </Text>
            </View>
            <View className="basis-3/4">
                <View className="flex felx-col space-y-2 items-center">
                    <Image 
                        source={lockDoor}
                        className="w-[100] h-[50]"
                    />
                    <Text className="">
                        Khóa cửa
                    </Text>
                </View>
                
            </View>
        </View>
    </View>
    );
}

export default AddDevice;