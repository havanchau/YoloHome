import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { View } from "react-native";
import CustomerTabNavigator from "../navigations/CustomerTabNavigation";
import SalerTabNavigator from "../navigations/SalerTabNavigation";
import AuthNavigator from "../navigations/AuthNavigation";
import AdminTabNavigator from "../navigations/AdminNavigation"
import NavbarCustomer from "../components/NavBar/NavBarCustomer";
import NavbarSaler from "../components/NavBar/NavBarSaler";
import NavBarAdmin from "../components/NavBar/NavBarAdmin"
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  AsyncStorage.setItem("uid", "66390aafa721d4b54d0e8188");
  AsyncStorage.setItem("name", "Nguyen Thanh Liem");  



const axios = require('axios');

const uri = 'https://cluster0.tctbbi8.mongodb.net/';
const dbName = 'PROJECT 0';
const collectionName = 'test';
const documentId = '66390aafa721d4b54d0e8188';

async function connectAndQuery() {
  try {
    const response = await axios.get(`${uri}databases/${dbName}/collections/${collectionName}/${documentId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 596431', // Thay YOUR_ACCESS_TOKEN bằng mã truy cập của bạn
      },
    });

    const document = response.data;
    if (document) {
      const adaKey = document.ada_key;
      console.log('ada_key:', adaKey);
    } else {
      console.log('Document not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

connectAndQuery();







  return (
    <NavigationContainer theme={MyTheme}>
      {isLoggedIn ? (
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
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};
export default Main;




