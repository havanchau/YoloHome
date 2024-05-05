import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CORLOR } from "../../constants";
import UploadImage from "../../components/UploadImage/UploadImage";

const NewDevice = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    name: "",
    content: "",
    image: "",
    type: "",
    power: 0,
    price: 0,
    discount: 0,
    amount: 0,
  });
  const [photo, setPhoto] = useState(null);
  const [uid, setUid] = useState("");

  const navigatiton = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("uid")
      .then((uid) => {
        setUid(uid);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUploadImage = () => {
    axios
      .post(`http://10.0.2.2:4000/images/upload`, photo)
      .then((response) => {
        console.log(response);
        setDeviceInfo((prevState) => ({
          ...prevState,
          image: response.data.url,
        }));
      })
      .catch((error) => console.log(error));
  };

  const handleAddNewDeviceInformation = () => {
    const device = {
      userId: uid,
      amount: deviceInfo.amount,
      price: deviceInfo.price,
      discount: deviceInfo.discount,
      information: {
        name: deviceInfo.name,
        image: deviceInfo.image,
        describe: deviceInfo.content,
        type: deviceInfo.type,
        power: deviceInfo.power,
      },
    };

    axios
      .post(`http://10.0.2.2:4000/devicesalers`, device)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <View className={`mx-4 bg-${CORLOR.white}`}>
      <View className="flex items-center justify-center mt-8 h-16 rounded-t-3xl">
        <Text className="px-2 text-2xl font-medium mb-1 text-black">
          Thêm sản phẩm mới
        </Text>
      </View>

      <View className="">
        <View className="flex-row items-center mt-4 h-10">
          <Text className="text-lg font-semibold text-black">Tên sản phẩm</Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                name: text,
              }))
            }
            className="text-normal font-semibold w-full border-1 border-b border-gray-200"
            placeholder="Nhập tên sản phẩm"
            value={deviceInfo.name}
          />
        </View>
      </View>

      <View className="">
        <View className="flex-row items-center mt-1 h-10">
          <Text className="text-lg font-semibold text-black">
            Mô tả sản phẩm
          </Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                content: text,
              }))
            }
            className="text-normal font-semibold w-full border-1 border-b border-gray-200"
            placeholder="Nhập tên sản phẩm"
            value={deviceInfo.content}
          />
        </View>
      </View>

      <View className="">
        <View className="flex-row items-center mt-1 h-10">
          <Text className="text-lg font-semibold text-black">
            Loại thiết bị
          </Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                type: text,
              }))
            }
            className="text-normal font-semibold w-full border-1 border-b border-gray-200"
            placeholder="Nhập loại sản phẩm"
            value={deviceInfo.type}
          />
        </View>
      </View>

      <View className="">
        <View className="flex-row items-center mt-1 h-10">
          <Text className="text-lg font-semibold text-black">
            Năng lượng tiêu thụ
          </Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                power: parseInt(text),
              }))
            }
            className="text-normal font-semibold w-full border-1 border-b border-gray-200"
            placeholder="Năng lượng tiêu thụ"
            value={deviceInfo.power.toString()}
          />
        </View>
      </View>

      <View className="">
        <View className="flex-row items-center mt-1 h-10">
          <Text className="text-lg font-semibold text-black">Giảm giá</Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                discount: parseInt(text),
              }))
            }
            className="text-normal font-semibold w-full border-1 border-b border-gray-200"
            placeholder="Giảm giá"
            value={deviceInfo.discount.toString()}
          />
        </View>
      </View>

      <View className="">
        <View className="flex-row items-center mt-1 h-10">
          <Text className="text-lg font-semibold text-black">Giá tiền</Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                price: parseInt(text),
              }))
            }
            className="text-normal font-semibold w-full border-1 border-b border-gray-200"
            placeholder="Giá tiền"
            value={deviceInfo.name}
          />
        </View>
      </View>

      <View className=" mb-2">
        <View className="flex-row items-center mt-1 h-10">
          <Text className="text-lg font-semibold text-black">
            Số lượng thiết bị
          </Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                amount: parseInt(text),
              }))
            }
            className="text-normal font-semibold w-full border-1 border-b border-gray-200"
            placeholder="Số lượng thiết bị"
            value={deviceInfo.amount.toString()}
          />
        </View>
      </View>

      <UploadImage photo={photo} setPhoto={setPhoto} title="Add new image" />

      <TouchableOpacity
        onPress={() => {
          handleUploadImage();
          handleAddNewDeviceInformation();
          // navigator.navigate("DeviceSale");
        }}
        className="w-full h-12 items-center flex bg-blue-700 justify-center rounded-xl mt-8"
      >
        <Text className="text-lg font-semibold text-black">Xác nhận</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="w-full h-12 items-center flex bg-gray-400 justify-center rounded-xl mt-4"
        onPress={() => navigatiton.navigate("DeviceSale")}
      >
        <Text className="text-lg font-semibold text-black">Hủy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewDevice;
