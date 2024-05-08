import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { View } from "react-native";
import CustomerTabNavigator from "../navigations/CustomerTabNavigation";
import CustomerTabNavigator_Home2 from "../navigations/CustomerTabNavigation_Home2";
import SalerTabNavigator from "../navigations/SalerTabNavigation";
import AuthNavigator from "../navigations/AuthNavigation";
import AdminTabNavigator from "../navigations/AdminNavigation"
import NavbarCustomer from "../components/NavBar/NavBarCustomer";
import NavBarCustomer_Home2 from "../components/NavBar/NavBarCustomer_Home2"; 
import NavbarSaler from "../components/NavBar/NavBarSaler";
import NavBarAdmin from "../components/NavBar/NavBarAdmin"
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Role = {
  admin: "ADMIN",
  customer: "CUSTOMER",
  saler: "SALER",
};

const Main = () => {
  const isLoggedIn = true;
  const user = "CUSTOMER";
  const key = "khong";


  AsyncStorage.setItem("uid", "66390aafa721d4b54d0e8188");
  AsyncStorage.setItem("name", "Nguyen Thanh Liem");  
  // AsyncStorage.setItem("ada_username", "username");  



    try {
      const response =  axios.post('http://192.168.1.167:4000', {

      });

      const adaKey = response.data.ada_key;
      console.log('ada_key:', adaKey);

      // Tiếp tục xử lý giá trị ada_key theo nhu cầu của bạn
    } catch (error) {
      console.error('Error:', error);
    }
  


 
  

  






     


  return (
    <NavigationContainer theme={MyTheme}>
      {isLoggedIn ? (
        <>
          {user === Role.customer && key === "aio_FkrP18aZxzdTK08d24OWab3YM36g" ? (
            <>
              <CustomerTabNavigator_Home2 />
              <View>
                <NavBarCustomer_Home2 />
              </View>
            </>
          ) : user === Role.customer && key === "aio_cPjy77J5P1Ywe7UA0XiREjS2bFVP" ? (
            <>
              <CustomerTabNavigator />
              <View>
                <NavbarCustomer />
              </View>
            </>
          ) : user === Role.saler ? (
            <>
              <SalerTabNavigator />
              <View>
                <NavbarSaler />
              </View>
            </>
          ) : user === Role.admin ? (
            <>
              <AdminTabNavigator />
              <View>
                <NavBarAdmin />
              </View>
            </>
          ) : null}
        </>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  ); 
};

export default Main;