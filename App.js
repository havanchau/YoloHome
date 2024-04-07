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
import Kitchen from "./views/Kitchen";
import LivingRoom from "./views/LivingRoom";
import BathRoom from "./views/BathRoom";
import BedRoom from "./views/BedRoom";
import infoQuat from "./views/infoQuat";
import infoBepDien from "./views/infoBepDien";
import infoDenChum from "./views/infoDenChum";
import infoDenTran from "./views/infoDenTran";
import infoTuLanh from "./views/infoTuLanh";
import infoMayNongLanh from "./views/infoMayNongLanh";
import infoDieuHoa from "./views/infoDieuHoa";
import infoTivi from "./views/infoTivi";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name=" " component={Splash} />
      <Stack.Screen name="Kitchen" component={Kitchen} />
      <Stack.Screen name="LivingRoom" component={LivingRoom} />
      <Stack.Screen name="BathRoom" component={BathRoom} />
      <Stack.Screen name="BedRoom" component={BedRoom} />
      <Stack.Screen name="infoQuat" component={infoQuat} />
      <Stack.Screen name="infoBepDien" component={infoBepDien} />
      <Stack.Screen name="infoDenChum" component={infoDenChum} /> 
      <Stack.Screen name="infoDenTran" component={infoDenTran} />
      <Stack.Screen name="infoTuLanh" component={infoTuLanh} />
      <Stack.Screen name="infoMayNongLanh" component={infoMayNongLanh} /> 
      <Stack.Screen name="infoDieuHoa" component={infoDieuHoa} />
      <Stack.Screen name="infoTivi" component={infoTivi} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
