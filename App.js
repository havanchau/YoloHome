import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

import Main from "./src/screens/shares/Auth";


export default function App() {
  return (
    <View className="flex-1 px-8 py-6 mt-8 bg-white">
      <SafeAreaProvider>
        <Main  />
      </SafeAreaProvider>


    </View>

  );
}