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


import Splash from "./views/Splash";
import Schedule from "./views/Schedule";
import History from "./views/History";
import infoFan from "./views/infoFan";
import infoLight from "./views/infoLight";
import infoSpeaker from "./views/infoSpeaker";
import infoTemperatureSensor from "./views/infoTemperatureSensor";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name=" " component={Splash} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="infoFan" component={infoFan} />
      <Stack.Screen name="infoLight" component={infoLight} />
      <Stack.Screen name="infoSpeaker" component={infoSpeaker} />
      <Stack.Screen name="infoTemperatureSensor" component={infoTemperatureSensor} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
