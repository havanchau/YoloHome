import {React, useState }from "react";
import { View, Text, Image,TouchableOpacity} from "react-native";
import {Entypo,Ionicons,FontAwesome6,MaterialCommunityIcons} from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
export default NavBarCustomer = () =>
{   const navigation = useNavigation();
    const [selectedIcon, setSelectedIcon] = useState(null);

    const pressHome = () => {
        navigation.navigate('HomeScreen');
    }

    const pressShop = () => {
        navigation.navigate('HomeScreen');
    }

    const pressDev = () => {
        navigation.navigate('HomeScreen');
    }


    const pressAcc = () => {
        navigation.navigate('Info');
    }

    const iconColor = (iconName) => {
        return selectedIcon === iconName ? '#199A8E' : '#000'; 
    }
    return (
        <View className='flex flex-row grow w-screen px-4 justify-between'>
            <TouchableOpacity onPress={pressHome} className='mr-4'><Entypo className='text-blue-900' name='home' size={40}/></TouchableOpacity>
            <TouchableOpacity onPress={pressShop} className='mr-4'><Entypo className='text-blue-900' name='shopping-cart' size={40}/></TouchableOpacity>
            <TouchableOpacity onPress={pressDev} className='mr-4'><MaterialCommunityIcons className='text-blue-900' name='devices' size={40}></MaterialCommunityIcons></TouchableOpacity> 
            <TouchableOpacity onPress={pressAcc}><MaterialCommunityIcons className='text-blue-900' name='account' size={40}></MaterialCommunityIcons></TouchableOpacity>           
        </View>
    );
}