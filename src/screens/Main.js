import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import TabNavigator from "../navigations/TabNavigation";
import AuthNavigator from "../navigations/AuthNavigation";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white', // Thiết lập màu nền của NavigationContainer
  },
};

const Role = {
  admin: 'ADMIN',
  customer: 'CUSTOMER',
  saler: 'SALER',
}

const Main = () => {
  const isLoggedIn = true;
  const user = 'SALER';

  return (
    <NavigationContainer theme={MyTheme}>
      {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default Main;