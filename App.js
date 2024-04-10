import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import DeviceSale from "./src/screens/DeviceSale/DeviceSale";
import NewDevice from "./src/screens/NewDevice/NewDevice";
import MaintenanceSchedule from "./src/screens/MaintenanceSchedule/MaintenanceSchedule";
import ContactCustomer from "./src/screens/ContactCustomer/ContactCustomer";
import MessageContact from "./src/screens/MessageContact/MessageContact";

export default function App() {
  return (
    <View className="flex-1 px-8 py-6 mt-8 bg-white">
      {/* <NewDevice /> */}
      {/* <DeviceSale /> */}
      {/* <MaintenanceSchedule /> */}
      {/* <ContactCustomer /> */}
      <MessageContact />
      <Test />
    </View>
  );
}
