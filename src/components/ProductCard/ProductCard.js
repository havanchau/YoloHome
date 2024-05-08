import React from "react";
import { View, Text, Image } from "react-native";

const ProductCard = ({ product }) => {
  return (
    <View className="rounded-2xl shadow-md px-4 py-2 border-1 border mb-4 flex-row justify-between items-center w-5/6">
      <Image
        source={{ uri: `https://s2s.co.th/wp-content/uploads/2019/09/photo-icon-1.jpg` }}
        style={{ width: "25%", height: 72 }}
        resizeMode="cover"
        className="h-32 rounded-lg object-cover my-1"
      />
      <View className="">
        <Text className="px-2 text-xl font-medium mb-1 text-black">
          {product.information.name}
        </Text>
        <Text className="px-2 text-black text-lg">
          Giá: {product.price} {" VND"}
        </Text>
      </View>
    </View>
  );

};

export default ProductCard;
