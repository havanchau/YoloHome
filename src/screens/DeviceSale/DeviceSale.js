import React from "react";
import { View } from "react-native";

import SalerSearch from "../../components/SalerSearch/SalerSearch";
import ProductCard from "../../components/ProductCard/ProductCard";
import Images from "../../../assets";


const products = [
  {
    id: '1',
    name: "Máy lạnh Toshiba 1HP",
    price: 2000000,
    content:
      "Máy lạnh Toshiba 1 HP Inverter RAS-H10C4KCVG-V có công suất làm lạnh là 1 HP - 9.000 BTU nên phạm vi làm lạnh hiệu quả cho không gian dưới 15 m2.",
    image: Images.airConditioning,
    isLarge: true,
  },
  {
    id: '2',
    name: "Đèn phòng thông minh",
    price: 1500000,
    content:
      "Đèn thông minh không chỉ đơn giản là để phát sáng — đèn còn giúp bạn giảm căng thẳng sau một ngày dài làm việc, khiến ngôi nhà của bạn ấm áp, sum vầy.",
    image: Images.light,
    isLarge: false,
  },
  {
    id: '3',
    name: "Đèn phòng thông minh",
    price: 1500000,
    content:
      "Đèn thông minh không chỉ đơn giản là để phát sáng — đèn còn giúp bạn giảm căng thẳng sau một ngày dài làm việc, khiến ngôi nhà của bạn ấm áp, sum vầy.",
    image: Images.light,
    isLarge: false,
  },
];


const DeviceSale = () => {
  return (
    <View className="">
      <View className="flex items-center mb-8">
        <SalerSearch />
      </View>
      <View className="flex items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </View>
  );
};

export default DeviceSale;
