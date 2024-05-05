import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

import Main from "./src/screens/Main";
import Login from "./src/screens/shares/Login"
// import MessageContact from "./src/screens/MessageContact"

import styles from "./src/styles/global.css";

export default function App() {
  return (
    <View className="flex-1 px-8 py-6 mt-8 bg-white">
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
      {/* <MessageContact /> */}
    </View>
  );
}