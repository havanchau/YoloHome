import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { CORLOR } from "../../../src/constants/index";
import axios from "axios";

const ViewDeviceSaler = ({ route }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [device, setDevice] = useState(route.params.device);

  const handleEditInforDevice = async () => {
    const { __v, _id, ...newData } = device;
    axios
      .put(`http://10.0.2.2:4000/devicesalers/${_id}`, {
        discount: newData.discount,
        price: newData.price,
        amount: newData.amount,
        userId: newData.userId,
        information: {
          name: newData.information.name,
          image: '',
          describe: newData.information.describe,
          type: newData.information.type,
          power: newData.information.power,
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <View className={`mx-4 bg-${CORLOR.white}`}>
      {device ? (
        <View className="">
          <View className="flex items-end justify-end mt-8">
            {isEdit ? (
              <TouchableOpacity
                className=""
                onPress={() => {
                  setIsEdit(false);
                  handleEditInforDevice();
                }}
              >
                <Text className="underline text-blue-700 text-lg">
                  Xác nhận
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                className=""
                onPress={() => {
                  setIsEdit(true);
                }}
              >
                <Text className="underline text-blue-700 text-lg">
                  Chỉnh sửa
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View className="flex items-center justify-center h-16 rounded-t-3xl">
            <Text className="px-2 text-2xl font-medium mb-1 text-black">
              Xem sản phẩm
            </Text>
          </View>

          <View className="">
            <View className="flex-row items-center mt-4 h-10">
              <Text className="text-lg font-semibold text-black">
                Tên sản phẩm
              </Text>
            </View>
            <View className="">
              <TextInput
                className="text-normal font-semibold w-full border-1 border-b border-gray-200"
                placeholder="Nhập tên sản phẩm"
                value={device.information.name}
                onChangeText={(text) =>
                  setDevice((prevState) => ({
                    ...prevState,
                    information: {
                      ...prevState.information,
                      name: text,
                    },
                  }))
                }
                readOnly={!isEdit}
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
                className="text-normal font-semibold w-full border-1 border-b border-gray-200"
                placeholder="Nhập mô tả sản phẩm"
                value={device.information.describe}
                onChangeText={(text) =>
                  setDevice((prevState) => ({
                    ...prevState,
                    information: {
                      ...prevState.information,
                      describe: text,
                    },
                  }))
                }
                readOnly={!isEdit}
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
                className="text-normal font-semibold w-full border-1 border-b border-gray-200"
                placeholder="Nhập loại sản phẩm"
                value={device.information.type}
                onChangeText={(text) =>
                  setDevice((prevState) => ({
                    ...prevState,
                    information: {
                      ...prevState.information,
                      type: text,
                    },
                  }))
                }
                readOnly={!isEdit}
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
                className="text-normal font-semibold w-full border-1 border-b border-gray-200"
                placeholder="Năng lượng tiêu thụ"
                value={device.information.power.toString()}
                onChangeText={(text) =>
                  setDevice((prevState) => ({
                    ...prevState,
                    information: {
                      ...prevState.information,
                      power: parseInt(text),
                    },
                  }))
                }
                readOnly={!isEdit}
              />
            </View>
          </View>

          <View className="">
            <View className="flex-row items-center mt-1 h-10">
              <Text className="text-lg font-semibold text-black">Giảm giá</Text>
            </View>
            <View className="">
              <TextInput
                className="text-normal font-semibold w-full border-1 border-b border-gray-200"
                placeholder="Giảm giá"
                value={device.discount.toString()}
                onChangeText={(text) =>
                  setDevice((prevState) => ({
                    ...prevState,
                    discount: parseInt(text),
                  }))
                }
                readOnly={!isEdit}
              />
            </View>
          </View>

          <View className="">
            <View className="flex-row items-center mt-1 h-10">
              <Text className="text-lg font-semibold text-black">Giá tiền</Text>
            </View>
            <View className="">
              <TextInput
                className="text-normal font-semibold w-full border-1 border-b border-gray-200"
                placeholder="Giá tiền"
                value={device.price.toString()}
                onChangeText={(text) =>
                  setDevice((prevState) => ({
                    ...prevState,
                    price: parseInt(text),
                  }))
                }
                readOnly={!isEdit}
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
                className="text-normal font-semibold w-full border-1 border-b border-gray-200"
                placeholder="Số lượng thiết bị"
                value={device.amount.toString()}
                onChangeText={(text) =>
                  setDevice((prevState) => ({
                    ...prevState,
                    amount: parseInt(text),
                  }))
                }
                readOnly={!isEdit}
              />
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default ViewDeviceSaler;
