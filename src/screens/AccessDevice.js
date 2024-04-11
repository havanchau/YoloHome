import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import plus from "../../assets/plus.png";
import trash from "../../assets/trash.png";
import aircondition from "../../assets/DeviceImages/aircondition.png";
import light from "../../assets/DeviceImages/light.png";
import waterboiler from "../../assets/DeviceImages/waterboiler.png";
import fan from "../../assets/DeviceImages/pan.png";
import television from "../../assets/DeviceImages/television.png";

export default AccessDevice = () => {
  const navigation = useNavigation();

  const deviceList = [
    { id: 1, name: "Air Condition", status: "Running", imageUri: aircondition },
    { id: 2, name: "Light", status: "Running", imageUri: light },
    { id: 3, name: "Water Boiler", status: "Running", imageUri: waterboiler },
    { id: 4, name: "Fan", status: "Running", imageUri: fan },
    { id: 5, name: "Television", status: "Running", imageUri: television },
  ];

  return (
    <TailwindProvider>
      <View className="flex-1 items-center pb-10 pt-10">
        <ScrollView>
          {deviceList.map((device, index) => (
            <View key={index} className="mb-2">
              <View className="flex flex-row w-[360] h-[80]  border border-gray-300 rounded-xl bg-white items-center content-center">
                <View className="w-[310] h-[80] flex flex-row place-content-center">
                  <Image
                    className="w-[50] h-[50] rounded-xl m-4"
                    source={device.imageUri}
                  />
                  <View className="my-5">
                    <Text className="font-bold text-bluebg text-xl">
                      {device.name}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity>
                  <Image source={trash} className="w-[30] h-[30]" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="flex flex-row space-x-5">
          <View className="w-[180] h-[80]">
            <TouchableOpacity className="py-3 px-8 mt-6 bg-bluebg rounded-md items-center">
              <View className="flex flex-row items-center space-x-2">
                <Image source={plus} className="w-[20] h-[20]" />
                <Text className="text-base text-white">Thêm thiết bị</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="w-[160] h-[80]">
            <TouchableOpacity className="py-3 px-8 mt-6 bg-bluebg rounded-md items-center justify-center flex" onPress={() => navigation.navigate("ControlDevice")}>
              <View className="flex flex-row items-center space-x-2">
                <Text className="text-base text-white">Cập nhật</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TailwindProvider>
  );
};
