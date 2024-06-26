import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { TailwindProvider } from 'tailwindcss-react-native';
import logo from "../../../assets/logo.png";

const SearchBar = ({ handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        console.log('Search Query:', searchQuery);
        handleSearch(searchQuery); 
    };

    return (
        <View className='flex flex-row w-screen px-10 items-center justify-center'>
            <View><Feather name="search" size={20} color="gray" /></View>
            <View className="w-3/4">
                <TextInput
                    className='p-4 w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500'
                    placeholder="Tìm kiếm ..."
                    placeholderTextColor="gray"
                    onChangeText={setSearchQuery}
                    value={searchQuery} // Đảm bảo giá trị của trường nhập liệu được cập nhật
                    onSubmitEditing={handleSubmit}
                    required
                />
            </View>
            <Image
                source={logo}
                className="w-[60] h-[30]"
            />
        </View>
    );
}

export default SearchBar;
