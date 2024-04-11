import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import UserManagement from "../screens/UserManagement/UserManagement";
import ControlDevice from "../screens/ControlDevice/ControlDevice";
import InfoUserView from "../screens/InfoUserView/InfoUserView";
import AccessDevice from "../screens/AccessDevice/AccessDevice";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SalerStack = () => {
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
      <Stack.Screen name="Home" component={SalerStack} />
    </Stack.Navigator>
  );
};

export default CustomerTabNavigator;
