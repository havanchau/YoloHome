import {React, useState,useEffect}from "react";
import { View, Text, Image,TouchableOpacity} from "react-native";
import {Entypo,Ionicons,FontAwesome6,MaterialCommunityIcons} from "react-native-vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
export default NavBarAdmin = () =>
{   const navigation = useNavigation();
    const [selectedIcon, setSelectedIcon] = useState(null);
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
    const pressHome = () => {
        navigation.navigate('HomeScreen');
    }

    const pressDev = () => {
        navigation.navigate('UserManagement');
    }


    const pressAcc = () => {
        navigation.navigate('InfoUserView',{ userId: id});
    }

    const iconColor = (iconName) => {
        return selectedIcon === iconName ? '#199A8E' : '#000'; 
    }
    return (
        <View className='flex flex-row grow justify-between'>
            <TouchableOpacity onPress={pressHome} className='mr-4'><Entypo className='text-blue-900' name='home' size={40}/></TouchableOpacity>

            <TouchableOpacity onPress={pressDev} className='mr-4'><FontAwesome6 className='text-blue-900' name='people-group' size={40}></FontAwesome6></TouchableOpacity> 
            <TouchableOpacity onPress={pressAcc}><MaterialCommunityIcons className='text-blue-900' name='account' size={40}></MaterialCommunityIcons></TouchableOpacity>           
        </View>
    );
}