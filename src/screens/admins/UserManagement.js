import React, { useState, useEffect} from "react";
import { View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';

const UserManagement = () => {
  const navigation = useNavigation();
  const [userList, setUserList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false); 
  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await axios.get('http://192.168.154.235:4000/users', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        withCredentials:true
      });
      setUserList(response.data);
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  const handlePress = (user) => {
    console.log("Button pressed");
    console.log(user);
    navigation.navigate('InfoAdminView', { userId: user._id } );
  };

  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults([]); 
      setSearched(false); 
      return;
    }

    try {
      const response = await axios.get(`http://192.168.154.235:4000/users/search/name/${query}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        withCredentials:true
      });
      setSearchResults(response.data);
      setSearched(true); 
    } catch (error) {
      console.error('Error searching user list:', error);
    }
  };

  return (
    <View className='flex-1 items-center pb-10 pt-10'>
      <SearchBar handleSearch={handleSearch} />
      <ScrollView className='pt-6'>

        {(searched === false || searchResults.length === 0) && userList.map(user => (
          <TouchableOpacity key={user.id} className='flex flex-row w-full px-6 py-2 items-center border-b border-gray-200' onPress={() => handlePress(user)}>
            <Image
              className='w-[50] h-[50] rounded-full mr-4'
              source={{ uri: 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' }}
            />
            <View>
              <Text className='font-bold text-bluebg text-xl'>{user.fullname}</Text>
              <Text className='text-green-600'>Online</Text>
            </View>
            <Text className='ml-auto text-sm text-gray-400'>Xem thêm</Text>
          </TouchableOpacity>
        ))}
        {searched === true && searchResults.map(user => (
          <TouchableOpacity key={user.id} className='flex flex-row w-full px-6 py-2 items-center border-b border-gray-200' onPress={() => handlePress(user)}>
            <Image
              className='w-[50] h-[50] rounded-full mr-4'
              source={{ uri: 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' }}
            />
            <View>
              <Text className='font-bold text-bluebg text-xl'>{user.fullname}</Text>
              <Text className='text-green-600'>Online</Text>
            </View>
            <Text className='ml-auto text-sm text-gray-400'>Xem thêm</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserManagement;
