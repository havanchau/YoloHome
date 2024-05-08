import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import AuthNavigator from "../../navigations/AuthNavigation";

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
  return (
  <NavigationContainer theme={MyTheme} >
        <AuthNavigator />
        </NavigationContainer>
  );
};
export default Main;