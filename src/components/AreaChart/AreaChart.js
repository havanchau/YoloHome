// import { AreaChart } from "react-native-svg-charts";
// import { View } from "react-native";
// import { Dimensions } from "react-native";
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";

// export default AreaChart = () =>
// {   const screenWidth = Dimensions.get("window").width;
//     const data = {
//         labels: ["January", "February", "March", "April", "May", "June"],
//         datasets: [
//           {
//             data: [20, 45, 28, 80, 99, 43],
//             color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
//             strokeWidth: 2 // optional
//           }
//         ],
//         legend: ["Rainy Days"] // optional
//       };
//     return(
//         <View>
//             <LineChart
//             data={data}
//             width={screenWidth}
//             height={220}
//             chartConfig={chartConfig}
//             />
//         </View>
//     );
// }