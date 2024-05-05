import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import NewDevice from "../screens/NewDevice";
import DeviceSale from "../screens/DeviceSale";
import MessageContact from "../screens/MessageContact";
import ChatContact from "../screens/ChatContact";
import ViewDeviceSaler from "../screens/ViewDeviceSaler";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SalerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewDevice"
        component={NewDevice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeviceSale"
        component={DeviceSale}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageContact"
        component={MessageContact}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatContact"
        component={ChatContact}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewDeviceSaler"
        component={ViewDeviceSaler}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SalerTabNavigator = () => {
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

export default SalerTabNavigator;
