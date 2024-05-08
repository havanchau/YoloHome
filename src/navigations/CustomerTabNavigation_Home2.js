import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen_Home2 from "../screens/HomeScreen_Home2";
import UserManagement from "../screens/admins/UserManagement";
import ControlDevice_Home2 from "../screens/customers/ControlDevice_Home2";
import InfoUserView from "../screens/admins/InfoAdminView";
import AccessDevice_Home2 from "../screens/customers/AccessDevice_Home2";
import AccountInfo from "../screens/shares/AccountInfo"
import NavBarCustomer_Home2 from "../components/NavBar/NavBarCustomer_Home2";
import infoDenTran_Home2 from "../screens/infoDenTran_Home2";
import infoQuat_Home2 from "../screens/infoQuat_Home2";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen_Home2"
        component={HomeScreen_Home2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserManagement"
        component={UserManagement}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ControlDevice_Home2"
        component={ControlDevice_Home2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfoUserView"
        component={InfoUserView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccessDevice_Home2"
        component={AccessDevice_Home2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="infoDenTran_Home2"
        component={infoDenTran_Home2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="infoQuat_Home2"
        component={infoQuat_Home2}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};


const CustomerTabNavigator_Home2 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="Home2" component={CustomerStack} />
    </Stack.Navigator>
  );
};


 export default CustomerTabNavigator_Home2;
