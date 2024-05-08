import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as FileSystem from 'expo-file-system'
import XLSX from 'xlsx';
import * as Sharing from "expo-sharing"
import axios from 'axios';
import logo from "../../../assets/logo.png"

const AdminHome = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [newUsersToday, setNewUsersToday] = useState(0);
  const [userList, setUserList] = useState([]);
  const day=new Date();
  useEffect(() => {
    const fetchUserStatistics = async () => {
      try {
        const totalUsersResponse = await axios.get('http://192.168.154.235:4000/users');
        const totalUsersCount = totalUsersResponse.data.length;
        setTotalUsers(totalUsersCount);
        setUserList(totalUsersResponse.data);
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        
        const newUsersTodayList = userList.filter(user => {
          const userCreatedAt = new Date(user.createdAt);
          return userCreatedAt.getFullYear() === startOfDay.getFullYear() &&
            userCreatedAt.getMonth() === startOfDay.getMonth() &&
            userCreatedAt.getDate() === startOfDay.getDate();
        });
        setNewUsersToday(newUsersTodayList.length);
      } catch (error) {
        console.error('Error fetching user statistics:', error);
      }
    };

    fetchUserStatistics();
  }, [userList]);

  const handleExportExcel = async () => {
    let wb = XLSX.utils.book_new();
  
    let statsWS = XLSX.utils.aoa_to_sheet([
      ["Tổng số người dùng", "Người dùng mới hôm nay","Ngày xuất báo cáo", "Người xuất báo cáo"],
      [totalUsers, newUsersToday,day.toString(),"ADMIN 123"]
    ]);
    XLSX.utils.book_append_sheet(wb, statsWS, "User Statistics");

    let userListWS = XLSX.utils.json_to_sheet(userList);
    XLSX.utils.book_append_sheet(wb, userListWS, "User List");
  
    const base64 = XLSX.write(wb, { type: "base64" });
    const filename = FileSystem.documentDirectory + "Statistics.xlsx";
  
    try {
      await FileSystem.writeAsStringAsync(filename, base64, { encoding: FileSystem.EncodingType.Base64 });
      await Sharing.shareAsync(filename);
    } catch (error) {
      console.error('Error exporting Excel file:', error);
    }
  };
  

  return (
    <View className="flex-1 items-center justify-center align-center pb-10  w-full ">
        <Image 
          source={logo}
          className="h-1/5 aspect-[2/1]"
        /> 
      <View className="w-full flex-row justify-end p-4">
        <TouchableOpacity className="text-white py-2 px-4 rounded bg-bluebg" onPress={handleExportExcel}>
          <Text className="text-white text-lg font-bold">Xuất file báo cáo</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full p-10">
      <Text className="text-xl mb-4 text-gray-600"><Text className="font-bold text-gray-700">Hôm nay: </Text> {day.toString()}</Text>
        <Text className="text-xl mb-4 text-blue-500"><Text className="font-bold text-bluebg">Tổng số người dùng:</Text> {totalUsers}</Text>
        <Text className="text-xl mb-4 text-blue-500"><Text className="font-bold text-bluebg">Người dùng mới hôm nay:</Text> {newUsersToday}</Text>
        <Text className="text-xl text-blue-500"><Text className="font-bold text-bluebg">Admin:</Text> Đỗ Ngọc Ánh</Text>
      </View>
    </View>
  );
};

export default AdminHome;
