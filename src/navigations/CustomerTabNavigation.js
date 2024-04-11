import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import NewDevice from "../screens/NewDevice/NewDevice";
import DeviceSale from "../screens/DeviceSale/DeviceSale";

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
