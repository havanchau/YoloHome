import React from 'react';
import { View, TextInput } from 'react-native';

import { AntDesign, MaterialIcons, Feather } from 'react-native-vector-icons';


const SalerSearch = () => {
    return (
        <View className="flex-row justify-between items-center px-3 py-2 ml-2">
            <MaterialIcons name='search' size={32} className="" />
            <TextInput
                className="text-xl font-bold text-center w-60"
                placeholder="Tìm kiếm thiết bị"
                value=""
            />
            <AntDesign name='plus' size={32} className="" />
            <Feather name='user-plus' size={32} className="" />
        </View>
    )
}

export default SalerSearch