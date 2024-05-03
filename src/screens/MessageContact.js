import React, { useEffect, useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "../contexts";

import { Images } from "../../assets";
import { useDebounce } from "../utilities";

const MessageContact = () => {
  const [users, setUsers] = useState(null);
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [searchUsers, setSearchUsers] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  const debounceSearch = useDebounce(searchUsers, 500);

  useEffect(() => {
    if (!debounceSearch.trim()) {
      setSearchResults([]);
      return;
    }

    axios
      .get(`http://10.0.2.2:4000/users`, {
        params: {
          fullname: debounceSearch,
        },
      })
      .then((response) => setSearchResults(response.data))
      .catch((error) => console.log(error));
  }, [debounceSearch]);

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
      <View className="w-full flex-row items-center justify-center relative">
        <TextInput
          className="mt-4 px-2 py-1 w-11/12 text-sm text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-1"
          placeholder="Tìm kiếm..."
          placeholderTextColor="gray"
          onChangeText={setSearchUsers}
          value={searchUsers}
          required
        />
        <View className="absolute top-16 w-11/12 bg-slate-200 rounded-lg">
          {searchResults &&
            searchResults.map((user) => (
              <View key={user._id} className="">
                {user._id != uid ? (
                  <TouchableOpacity
                    key={user._id}
                    onPress={() => {
                      navigation.navigate("ChatContact", {
                        id: user._id,
                        name: user.fullname,
                      });
                    }}
                    className="w-full items-center justify-center"
                  >
                    <View className="flex-row items-center justify-between">
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
                            <Text className="text-base font-normal">
                              {user.username}
                            </Text>
                            <Text className="text-xs font-normal opacity-0"></Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View className="w-11/12 h-[1px] bg-black my-1"></View>
                  </TouchableOpacity>
                ) : (
                  <View></View>
                )}
              </View>
            ))}
        </View>
      </View>
      <View className="mt-12">
        {users &&
          !debounceSearch.trim() &&
          users.map((user) => (
            <View
              key={user._id}
              className="w-full flex items-center justify-center"
            >
              {user._id != uid ? (
                <TouchableOpacity
                  key={user._id}
                  onPress={() => {
                    navigation.navigate("ChatContact", {
                      id: user._id,
                      name: user.fullname,
                    });
                  }}
                  className="w-full"
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
                          <Text className="text-base font-normal">
                            Chạm vào đây để xem
                          </Text>
                          <Text className="text-xs font-normal opacity-0"></Text>
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
