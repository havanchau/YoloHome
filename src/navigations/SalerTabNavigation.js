import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import NewDevice from "../screens/salers/NewDevice";
import DeviceSale from "../screens/salers/DeviceSale";
import MessageContact from "../screens/shares/MessageContact";
import ChatContact from "../screens/shares/ChatContact";
import ViewDeviceSaler from "../screens/salers/ViewDeviceSaler";
import InfoUserView from "../screens/shares/InfoUserView";
import Splash from "../screens/shares/Splash";
import Login from "../screens/shares/Login"
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SalerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeviceSale"
        component={DeviceSale}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewDevice"
        component={NewDevice}
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
      <Stack.Screen
        name="InfoUserView"
        component={InfoUserView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
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
