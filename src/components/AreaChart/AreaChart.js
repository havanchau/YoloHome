import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default AreaChart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sun","Sat"],
          datasets: [
            {
              data: [
                1, 3, 1, 2, 4, 5, 4
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width * 5/6} 
        height={220}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "white", 
          backgroundGradientFrom: "#ffffff", 
          backgroundGradientTo: "#ffffff", 
          decimalPlaces: 0, 
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, 
          labelColor: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, 
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
}
