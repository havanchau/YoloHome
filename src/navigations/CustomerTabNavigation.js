import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import UserManagement from "../screens/admins/UserManagement";
import ControlDevice from "../screens/customers/ControlDevice";
import InfoAdminView from "../screens/admins/InfoAdminView";
import AccessDevice from "../screens/customers/AccessDevice";
import AccountInfo from "../screens/shares/AccountInfo"
import InfoUserView from "../screens/shares/InfoUserView";
import Login from "../screens/shares/Login"
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
        name="InfoAdminView"
        component={InfoAdminView}
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
