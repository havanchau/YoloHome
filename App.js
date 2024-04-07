import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import DeviceSale from "./src/screens/DeviceSale";
import NewDevice from "./src/screens/NewDevice";
import MaintenanceSchedule from "./src/screens/MaintenanceSchedule";
import ContactCustomer from "./src/screens/ContactCustomer";
import MessageContact from "./src/screens/MessageContact";

export default function App() {
  return (
    <View className="flex-1 px-8 py-6 mt-8 bg-white">
      {/* <NewDevice /> */}
      {/* <DeviceSale /> */}
      {/* <MaintenanceSchedule /> */}
      {/* <ContactCustomer /> */}
      <MessageContact />
    </View>
  );
}
