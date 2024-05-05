import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default AccountInfo = () => {
    const name = "John Doe";
    const email = "johndoe@example.com";
    const address = "123 Street, City, Country";
    const password = "********";
    const deviceCount = 3; 
    const handleEdit = (field) => {
        console.log(`Editing ${field}`);
    };

    return (
        <View className='flex flex-col items-center justify-center pt-10'>
            <Image
                className='w-[80] h-[80] rounded-full mr-4 mb-5'
                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }}
            />
            <View className='flex flex-row mx-10 py-4 border-b border-lightblue'>
                <Feather name="user" size={24} className="text-bluebg mr-10" />
                <Text className='flex-1 text-md font-bold'>{name}</Text>
                <TouchableOpacity onPress={() => handleEdit("Name")}>
                    <Feather className="text-gray-400" name="edit" size={20} />
                </TouchableOpacity>
            </View>
            <View className='flex flex-row mx-10 py-4 border-b border-lightblue'>
                <Feather name="mail" size={24} className="text-bluebg mr-10" />
                <Text className='flex-1 text-md font-bold'>{email}</Text>
                <TouchableOpacity onPress={() => handleEdit("Email")}>
                    <Feather className="text-gray-400" name="edit" size={20} />
                </TouchableOpacity>
            </View>
            <View className='flex flex-row mx-10 py-4 border-b border-lightblue'>
                <Feather name="map-pin" size={24} className="text-bluebg mr-10" />
                <Text className='flex-1 text-md font-bold'>{address}</Text>
                <TouchableOpacity onPress={() => handleEdit("Address")}>
                    <Feather className="text-gray-400" name="edit" size={20} />
                </TouchableOpacity>
            </View>
            <View className='flex flex-row mx-10 py-4 border-b border-lightblue'>
                <Feather name="lock" size={24} className="text-bluebg mr-10" />
                <Text className='flex-1 text-md font-bold'>{password}</Text>
                <TouchableOpacity onPress={() => handleEdit("Password")}>
                    <Feather className="text-gray-400" name="edit" size={20} />
                </TouchableOpacity>
            </View>
            <View className='flex flex-row mx-10 py-4 border-b border-lightblue'>
                <Feather name="smartphone" size={24} className="text-bluebg mr-10" />
                <Text className='flex-1 text-md font-bold'>{deviceCount} devices</Text>
                <TouchableOpacity onPress={() => handleEdit("Devices")}>
                    <Feather className="text-gray-400" name="edit" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
