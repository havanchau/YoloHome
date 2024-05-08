import { React, useState,useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Entypo,
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

export default NavBarSaler = () => {
  const [id, setUser] = useState(null);
  useEffect(() => {
    const getUserRole = async () => {
      try {
        const id = await AsyncStorage.getItem("ID");
        setUser(id);
      } catch (error) {
        console.error("Error getting user role:", error);
      }
    };

    getUserRole();
  }, []); 
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState(null);

  const pressHome = () => {
    navigation.navigate("Splash");
  };

  const pressShop = () => {
    navigation.navigate("DeviceSale");
  };

  const pressChat = () => {
    navigation.navigate("MessageContact");
  };

  const pressAcc = () => {
    navigation.navigate("InfoUserView",{ userId: id });
  };

  const iconColor = (iconName) => {
    return selectedIcon === iconName ? "#199A8E" : "#000";
  };
  return (
    <View className="flex flex-row grow justify-between">
      <TouchableOpacity onPress={pressHome} className="mr-4">
        <Entypo className="text-blue-900" name="home" size={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={pressShop} className="mr-4">
        <Entypo className="text-blue-900" name="shop" size={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={pressChat} className="mr-4">
        <AntDesign className="text-blue-900" name="message1" size={40} />
      </TouchableOpacity>
      <TouchableOpacity onPress={pressAcc}>
        <MaterialCommunityIcons
          className="text-blue-900"
          name="account"
          size={40}
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  );
};
