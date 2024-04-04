// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//     <View className="flex-1 items-center justify-center bg-white">
//     <Text className="text-3xl">Open up App.js to start working on your app!</Text>
//     <StatusBar style="auto" />

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



import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./views/Login";
import Splash from "./views/Splash";
import UserManagement from "./views/UserManagement";
import InfoAdminView from "./views/InfoAdminView";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name=" " component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="User Management" component={UserManagement} />
      <Stack.Screen name="Info" component={InfoAdminView} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
