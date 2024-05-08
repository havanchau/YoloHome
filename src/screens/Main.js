import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { View,Text } from "react-native";
import React, { useEffect, useState } from "react";
import CustomerTabNavigator from "../navigations/CustomerTabNavigation";
import SalerTabNavigator from "../navigations/SalerTabNavigation";
import AuthNavigator from "../navigations/AuthNavigation";
import AdminTabNavigator from "../navigations/AdminNavigation";
import NavbarCustomer from "../components/NavBar/NavBarCustomer";
import NavbarSaler from "../components/NavBar/NavBarSaler";
import NavBarAdmin from "../components/NavBar/NavBarAdmin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Role = {
  admin: "admin",
  customer: "customer",
  saler: "saler",
};

const Main = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserRole = async () => {
      try {
        const userRole = await AsyncStorage.getItem("userRole");
        setUser(userRole);
      } catch (error) {
        console.error("Error getting user role:", error);
      }
    };

    getUserRole();
  }, []); 

  return (
    <>
      {user === null ? (

        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <>
          {user === Role.customer ? (
            <>
              <CustomerTabNavigator />
              <View className="">
                <NavbarCustomer />
              </View>
            </>
          ) : user === Role.saler ? (
            <>
              <SalerTabNavigator />
              <View className="">
                <NavbarSaler />
              </View>
            </>
          ) : user === Role.admin ? (
            <>
              <AdminTabNavigator />
              <View className="">
                <NavBarAdmin />
              </View>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default Main;
