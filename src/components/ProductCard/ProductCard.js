import React from "react";
import { View, Text, Image } from "react-native";

import { FontAwesome6 } from "react-native-vector-icons";

const ProductCard = ({ product }) => {
  return product.isLarge ? (
    <View className="rounded-2xl shadow-md px-4 py-2 bg-blue-700 mb-4">
      <Image
        source={product.image}
        className="w-full h-32 rounded-lg object-cover mb-2"
      />
      <Text className="px-2 text-xl font-medium mb-1 text-white">
        {product.name}
      </Text>
      <Text className="px-2 text-white text-lg">
        Giá: {product.price} {" VND"}
      </Text>
      <Text className="px-2 text-white text-base">{product.content}</Text>
      <View className="items-center">
        <FontAwesome6
          name="angles-down"
          size={32}
          className="text-gray-700 items-center"
        />
      </View>
    </View>
  ) : (
    <View className="rounded-2xl shadow-md px-4 py-2 border-1 border mb-4 flex-row justify-between items-center">
      <Image
        source={product.image}
        style={{ width: "25%", height: 72 }}
        resizeMode="cover"
        className="h-32 rounded-lg object-cover my-1"
      />
      <View className="">
        <Text className="px-2 text-xl font-medium mb-1 text-black">
          {product.name}
        </Text>
        <Text className="px-2 text-black text-lg">
          Giá: {product.price} {" VND"}
        </Text>
      </View>
    </View>
  );

};

export default ProductCard;
