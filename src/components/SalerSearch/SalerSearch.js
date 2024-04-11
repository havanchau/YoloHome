import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialIcons, Feather } from 'react-native-vector-icons';


const SalerSearch = () => {
    const navigator = useNavigation();
    return (
        <View className="flex-row justify-between items-center px-3 py-2 ml-2">
            <MaterialIcons name='search' size={32} className="" />
            <TextInput
                className="text-xl font-bold text-center w-60"
                placeholder="Tìm kiếm thiết bị"
                value=""
            />
            <TouchableOpacity onPress={() => navigator.navigate("NewDevice")}>
                <AntDesign name='plus' size={32} className="" />
            </TouchableOpacity>
            <Feather name='user-plus' size={32} className="" />
        </View>
    )
}

export default SalerSearch