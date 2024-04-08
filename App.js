import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AddDevice from './screens/addDevice';
import CreateDevice from './screens/createDevice';
import DeleteDevice from './screens/deleteDevice';
import Notify from './screens/notification';
import PowerConsump from './screens/powerConsump';

export default function App() {
  return (
    <>
      <DeleteDevice/>
    </>
  );
}


