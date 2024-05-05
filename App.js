import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

import Main from "./src/screens/Main";

import styles from "./src/styles/global.css";
import DeleteDevice from "./src/screens/DeleteDevice";
import CreateDevice from "./src/screens/CreateDevice";
import Notification from "./src/screens/Notification";
import AddDevice from "./src/screens/AddDevice";
import PowerConsump from "./src/screens/PowerComsump";

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