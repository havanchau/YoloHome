import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { View } from "react-native";
import CustomerTabNavigator from "../navigations/CustomerTabNavigation";
import SalerTabNavigator from "../navigations/SalerTabNavigation";
import AuthNavigator from "../navigations/AuthNavigation";
import NavbarCustomer from "../components/NavBar/NavBarCustomer";
import NavbarSaler from "../components/NavBar/NavBarSaler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white", // Thiết lập màu nền của NavigationContainer
  },
};

const Role = {
  admin: "ADMIN",
  customer: "CUSTOMER",
  saler: "SALER",
};

const Main = () => {
  const isLoggedIn = true;
  const user = "SALER";
  AsyncStorage.setItem("uid", "662c708b0ea5b75e861d8d1c");
  AsyncStorage.setItem("name", "Ha Van Chau");


  return (
    <NavigationContainer theme={MyTheme}>
      {isLoggedIn ? (
        user == "CUSTOMER" ? (
          <>
            <CustomerTabNavigator />
            <View className="">
              <NavbarCustomer />
            </View>
          </>
        ) : (
          <>
            <SalerTabNavigator />
            <View className="">
              <NavbarSaler />
            </View>
          </>
        )
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};
export default Main;
