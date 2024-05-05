import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const History = ({ ah1 }) => {
  const navigation = useNavigation();
  const [historyData, setHistoryData] = useState([]);

  // Function to navigate back to the main screen
  const goBack = () => {
    navigation.goBack();
  };

  // Function to update history data whenever ah1 changes
  useEffect(() => {
    if (ah1 && ah1.length > 0) {
      setHistoryData(ah1);
    }
  }, [ah1]);

  // Function to render activity history related to infoQuat
  const renderQuatah1 = () => {
    if (historyData && historyData.length > 0) {
      return (
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Hoạt động với Quạt:</Text>
          {historyData.map((activity, index) => (
            <View key={index} style={{ marginBottom: 5 }}>
              <Text>{activity}</Text>
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <View>
          {historyData.length === 0 && <Text style={{ fontSize: 20 }}>Không có hoạt động được tìm thấy.</Text>}
          {!historyData && <Text style={{ fontSize: 20 }}>Không có hd.</Text>}
          {!ah1 && <Text style={{ fontSize: 20 }}>Không có ah.</Text>}
          
          {/* Displaying the values of historyData and ah1 */}
          <Text style={{ fontSize: 16 }}>Giá trị của historyData: {JSON.stringify(historyData)}</Text>
          <Text style={{ fontSize: 16 }}>Giá trị của ah1: {JSON.stringify(ah1)}</Text>
        </View>
      );
          
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Lịch sử hoạt động</Text>
      {/* Render activity history related to infoQuat */}
      {renderQuatah1()}
      {/* Button to go back to the main screen */}
      <TouchableOpacity onPress={goBack} style={{ padding: 10, backgroundColor: "blue", borderRadius: 10, marginTop: 20 }}>
        <Text style={{ fontSize: 18, color: "white" }}>Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
};

export default History;
