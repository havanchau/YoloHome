import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Images } from "../../assets";

const userContacts = {
  user: {
    name: "Nguyễn Thị B",
    avatar: Images.userFemale,
  },
  contacts: [
    {
      id: 1,
      name: "Nguyễn Văn A",
      avatar: Images.userMale,
      lastMessage: "Chào em!.",
      lastSent: "8h20",
      unRead: 1,
    },
    {
      id: 2,
      name: "Nguyễn Văn A",
      avatar: Images.userMale,
      lastMessage: "Chào em!.",
      lastSent: "8h20",
      unRead: 1,
    },
    {
      id: 3,
      name: "Nguyễn Văn A",
      avatar: Images.userMale,
      lastMessage: "Chào em!.",
      lastSent: "8h20",
      unRead: 0,
    },
    {
      id: 4,
      name: "Nguyễn Văn A",
      avatar: Images.userMale,
      lastMessage: "Chào em!.",
      lastSent: "8h20",
      unRead: 1,
    },
    {
      id: 5,
      name: "Nguyễn Văn A",
      avatar: Images.userMale,
      lastMessage: "Chào em!.",
      lastSent: "8h20",
      unRead: 0,
    },
  ],
};

const MessageContact = () => {
  const [querySearch, setQuerySearch] = useState("");
  const navigation = useNavigation();

  return (
    <View className="">
      <View className="flex-row items-center justify-start">
        <Image
          source={userContacts.user.avatar}
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          className="h-32 rounded-lg object-cover my-1 mr-4"
        />
        <Text className="text-2xl font-medium">
          {userContacts.user.name} (You)
        </Text>
      </View>
      <TextInput
        className="mt-4 px-2 py-1 w-full text-sm text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-1"
        placeholder="Tìm kiếm ..."
        placeholderTextColor="gray"
        onChangeText={setQuerySearch}
        // onSubmitEditing=""
        value={querySearch}
        required
      />
      <View className="mt-12">
        {userContacts.contacts.map((user) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => {
              navigation.navigate("ChatContact", {
                id: user.id,
                name: user.name,
              });
            }}
          >
            <View className="flex-row items-center justify-between mt-4">
              <View className="flex-row items-start justify-center">
                <Image
                  source={user.avatar}
                  style={{ width: 52, height: 52 }}
                  resizeMode="cover"
                  className="h-32 rounded-lg object-cover my-1 mr-4"
                />
                <View className="flex items-start justify-center">
                  <Text className="text-lg font-medium">{user.name}</Text>
                  <View className="flex-row items-center justify-between w-60">
                    <Text className="text-base font-normal">
                      {user.lastMessage}
                    </Text>
                    <Text className="text-xs font-normal">{user.lastSent}</Text>
                  </View>
                </View>
                {user.unRead != 0 ? (
                  <View className="mt-4 w-4 h-4 items-center justify-center bg-blue-600 rounded-full">
                    <Text className="text-xs text-white">{user.unRead}</Text>
                  </View>
                ) : (
                  <View>
                    <Text></Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MessageContact;
