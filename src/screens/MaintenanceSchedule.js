import React, { useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome6 } from "react-native-vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";

const tasks = [
  {
    content: "Sửa tivi nhà lan",
  },
  {
    content: "Sửa tivi nhà lan",
  },
  {
    content: "Sửa tivi nhà lan",
  },
];

const MaintenanceSchedule = () => {
  const [selected, setSelected] = useState("");
  return (
    <View className="w-full">
      <View className="flex items-center justify-center mt-8 bg-blue-700 h-16 rounded-t-3xl">
        <Text className="px-2 text-2xl font-medium mb-1 text-white">
          Xem lịch bảo trì
        </Text>
      </View>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />

      <View className="mt-12">
        {tasks.map((task) => (
          <View className="ml-2 flex-row items-center border-b border-gray-400 py-2">
            <FontAwesome6
              name="screwdriver-wrench"
              size={32}
              className="mr-4"
            />
            <Text className="text-lg font-medium">{task.content}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MaintenanceSchedule;
