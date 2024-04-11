import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import DeviceSale from "./src/screens/DeviceSale/DeviceSale";
import NewDevice from "./src/screens/NewDevice/NewDevice";
import MaintenanceSchedule from "./src/screens/MaintenanceSchedule/MaintenanceSchedule";
import ContactCustomer from "./src/screens/ContactCustomer/ContactCustomer";
import MessageContact from "./src/screens/MessageContact/MessageContact";

import AddDevice from './src/screens/addDevice';
import CreateDevice from './src/screens/createDevice';
import DeleteDevice from './src/screens/deleteDevice';
import Notify from './src/screens/notification';
import PowerConsump from './src/screens/powerConsump';

export default function App() {
  return (
    <View>
      <DeleteDevice/>
    <View/>
  );
}
