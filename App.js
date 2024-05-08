import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

import Main from "./src/screens/Main";

import styles from "./src/styles/global.css";
// import DeleteDevice from "./src/screens/DeleteDevice";
// import CreateDevice from "./src/screens/CreateDevice";
// import Notification from "./src/screens/customers/Notification";
// import AddDevice from "./src/screens/AddDevice";
// import PowerConsump from "./src/screens/PowerComsump";
// import infoDenChum from "./src/screens/infoDenChum" xx;
// import infoDenTran from "./src/screens/infoDenTran" xx;
// import MaintenanceSchedule from "./src/screens/MaintenanceSchedule";
import DeviceList from "./src/screens/DeviceList";
// import Splash from "./src/screens/shares/Splash" xx;
// import MessageContact from "./src/screens/shares/MessageContact" xx;
// import ChatContact from "./src/screens/shares/ChatContact" xx;
// import AccountInfo from "./src/screens/shares/AccountInfo";
// import InfoUserView from "./src/screens/shares/InfoUserView" xx;
// import InfoAdminView from "./src/screens/admins/InfoAdminView" xx;
// import DeviceSale from "./src/screens/salers/DeviceSale" xx;
// import NewDevice from "./src/screens/salers/NewDevice" xx;
// import ViewDeviceSaler from "./src/screens/salers/ViewDeviceSaler" xx ;
// import Notification from "./src/screens/customers/Notification";
// import AdminHome from "./src/screens/admins/AdminHome";
// import UserManagement from "./src/screens/admins/UserManagement" xx;
export default function App() {
  return (
    <View className="flex-1 px-8 py-6 mt-8 bg-white">
      <SafeAreaProvider>
        <Main  />
      </SafeAreaProvider>


    </View>

  );
}