import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AddDevice from './src/screens/addDevice';
import CreateDevice from './src/screens/createDevice';
import DeleteDevice from './src/screens/deleteDevice';
import Notify from './src/screens/notification';
import PowerConsump from './src/screens/powerConsump';

export default function App() {
  return (
    <>
      <DeleteDevice/>
    </>
  );
}


