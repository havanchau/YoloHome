import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import UserManagement from "../screens/admins/UserManagement";
import ControlDevice from "../screens/ControlDevice";
import InfoUserView from "../screens/admins/InfoAdminView";
import AccessDevice from "../screens/AccessDevice";
import AccountInfo from "../screens/AccountInfo"
import NavBarCustomer from "../components/NavBar/NavBarCustomer";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserManagement"
        component={UserManagement}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ControlDevice"
        component={ControlDevice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfoUserView"
        component={InfoUserView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccessDevice"
        component={AccessDevice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{ headerShown: false }}
      />
   
    </Stack.Navigator>
  );
};


const CustomerTabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="Home" component={CustomerStack} />
    </Stack.Navigator>
  );
};

export default CustomerTabNavigator;
