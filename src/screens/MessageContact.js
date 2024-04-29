import React, { useEffect, useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "../contexts";

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
  const [users, setUsers] = useState(null);
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("name")
      .then((name) => {
        setName(name);
      })
      .catch((error) => console.log(error));

    AsyncStorage.getItem("uid")
      .then((uid) => {
        setUid(uid);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`http://10.0.2.2:4000/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View className="flex items-center justify-center">
      <View className="flex-row items-center justify-start">
        <Image
          source={Images.userMale}
          style={{ width: 60, height: 60 }}
          resizeMode="cover"
          className="h-32 rounded-lg object-cover my-1 mr-4"
        />
        <Text className="text-2xl font-medium">{name} (You)</Text>
      </View>
      <TextInput
        className="mt-4 px-2 py-1 w-11/12 text-sm text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-1"
        placeholder="Tìm kiếm ..."
        placeholderTextColor="gray"
        onChangeText={setQuerySearch}
        // onSubmitEditing=""
        value={querySearch}
        required
      />
      <View className="mt-12">
        {users &&
          users.map((user) => (
            <View key={user._id} className="w-full flex items-center justify-center">
              {user._id != uid ? (
                <TouchableOpacity
                  key={user._id}
                  onPress={() => {
                    navigation.navigate("ChatContact", {
                      id: user._id,
                      name: user.fullname,
                    });
                  }}
                >
                  <View className="flex-row items-center justify-between mt-4">
                    <View className="flex-row items-start justify-center">
                      <Image
                        source={Images.userMale}
                        style={{ width: 52, height: 52 }}
                        resizeMode="cover"
                        className="h-32 rounded-lg object-cover my-1 mr-4"
                      />
                      <View className="flex items-start justify-center">
                        <Text className="text-lg font-medium">
                          {user.fullname}
                        </Text>
                        <View className="flex-row items-center justify-between w-60">
                          <Text className="text-base font-normal">Hello</Text>
                          <Text className="text-xs font-normal">8h20</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
            </View>
          ))}
      </View>
    </View>
  );
};

export default MessageContact;
