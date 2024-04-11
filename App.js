// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import { StatusBar } from "expo-status-bar";
// import { Text, View } from "react-native";

// import DeviceSale from "./src/screens/DeviceSale/DeviceSale";
// import NewDevice from "./src/screens/NewDevice/NewDevice";
// import MaintenanceSchedule from "./src/screens/MaintenanceSchedule/MaintenanceSchedule";
// import ContactCustomer from "./src/screens/ContactCustomer/ContactCustomer";
// import MessageContact from "./src/screens/MessageContact/MessageContact";

// export default function App() {
//   return (
//     <View className="flex-1 px-8 py-6 mt-8 bg-white">
//       {/* <NewDevice /> */}
//       {/* <DeviceSale /> */}
//       {/* <MaintenanceSchedule /> */}
//       {/* <ContactCustomer /> */}
//       <MessageContact />
//       <Test />
//     </View>
//   );
// }


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login/Login";
import Splash from "./src/screens/Splash/Splash";
import UserManagement from "./src/screens/UserManagement/UserManagement";
import InfoAdminView from "./src/screens/InfoAdminView/InfoAdminView";
import Register from "./src/screens/Register/Register";
import ForgotPassword from "./src/screens/ForgotPassword/ForgotPassword";
import ConfirmCode from "./src/screens/ConfirmCode/ConfirmCode";
import ResetPassword from "./src/screens/ResetPassword/ResetPassword";
import ControlDevice from "./src/screens/ControlDevice/ControlDevice";
import AccessDevice from "./src/screens/AccessDevice/AccessDevice";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name=" " component={Splash}/>      

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <Stack.Screen name="User Management" component={UserManagement} />
      <Stack.Screen name="Info" component={InfoAdminView} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ConfirmCode" component={ConfirmCode}/>
      <Stack.Screen name="ResetPassword" component={ResetPassword}/>
      <Stack.Screen name="AccessDevice" component={AccessDevice}/>
      <Stack.Screen name="ControlDevice" component={ControlDevice}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      
    </Stack.Navigator>

    </NavigationContainer>
  );
}