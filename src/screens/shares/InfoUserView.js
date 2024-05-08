import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, PermissionsAndroid } from "react-native";
import { Feather, Entypo } from 'react-native-vector-icons';
import AreaChart from "../../components/AreaChart/AreaChart.js";
import * as FileSystem from 'expo-file-system'
import XLSX from 'xlsx';
import * as Sharing from "expo-sharing"
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from 'expo-updates';
export default InfoUserView = ({ route }) =>
    
{   
    const { userId } = route.params;
  const [userData, setUserData] = useState(null);
  const [userList, setUserList] = useState([]);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get('http://192.168.154.235:4000/users', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        setUserList(response.data);
        const user = response.data.find(user => user._id === userId);
        setUserData(user);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, [userId]);
    const handleClick =()=>{
        
        let wb =XLSX.utils.book_new();
        let ws=XLSX.utils.aoa_to_sheet(
            [
                ["Họ và Tên","ID","Username","Tổng số thiết bị"],
                [userData.fullname,userData._id,userData.username,"10"]
            ]
        );
        XLSX.utils.book_append_sheet(wb,ws,"Thông tin",true)
        const base64=XLSX.write(wb,{type:"base64"});
        const filename=FileSystem.documentDirectory+"Báo cáo người dùng.xlsx"
        FileSystem.writeAsStringAsync(filename,base64,{
            encoding:FileSystem.EncodingType.Base64
        })
        .then(()=>{
            Sharing.shareAsync(filename);
    
        });

    }
    const navigation = useNavigation();
    const logout =async()=>
    {
        AsyncStorage.setItem("userRole", "null"); 
        AsyncStorage.setItem("ID","null")
        AsyncStorage.setItem("isLoggedIn","false")
       await Updates.reloadAsync();
    }
    const device=()=>
        {
            navigation.navigate("DeviceList")
        }
    const handleinfo = () => {
        setShowPersonalInfo(!showPersonalInfo);
    };
    return(
  
            <View className='flex-1 items-center pt-10'>
                <Image
                className='w-[80] h-[80] rounded-full mr-4'
                source={{ uri: 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' }}
                />
                <Text className='font-bold text-bluebg text-xl pt-2 pb-10'>{userData?.fullname}</Text>
                <ScrollView>
                    <View className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='time-slot' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Tần suất sử dụng</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <AreaChart></AreaChart>
                    <TouchableOpacity onPress={handleClick}className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='download' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Xuất báo cáo về người dùng</Text>
                        <Feather name='chevron-right' size={20}></Feather>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={handleinfo} className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='text-document' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text  className='font-bold text-lg w-[240] '>Thông tin cá nhân</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </TouchableOpacity>
                    {showPersonalInfo && (
                    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: 'lightblue' }}>
                        <Text className="font-bold text-blue-500">Họ và tên: {userData?.fullname}</Text>
                        <Text className="font-bold ">ID: {userData?._id}</Text>
                        <Text className="font-bold ">Username: {userData?.username}</Text>
                        <Text className="font-bold ">Tổng số thiết bị: 10</Text>
                    </View>
                )}
                    <TouchableOpacity onPress={device} className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='sweden' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Danh sách thiết bị</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </TouchableOpacity>
                    <View className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-lightblue p-2 mr-3'>
                            <Entypo name='back-in-time' size={20} className='text-bluebg'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Lịch sử hoạt động</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={logout} className='flex flex-row items-center p-3 border-b border-lightblue'>
                        <View className='rounded-full bg-red-400 p-2 mr-3'>
                            <Entypo name='warning' size={20} className='text-red-900'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] text-red-600 '>Đăng xuất</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </TouchableOpacity>
                </ScrollView>
            </View>
    );
}