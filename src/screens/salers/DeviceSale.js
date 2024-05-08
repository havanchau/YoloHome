import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import SalerSearch from "../../components/SalerSearch/SalerSearch";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDebounce } from "../../utilities";


const DeviceSale = () => {
  const navigation = useNavigation();
  const [devices, setDevices] = useState([]);
  const [searchDevices, setSearchDevices] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [uid, setUid] = useState("");

  const debounceSearch = useDebounce(searchDevices, 500);

  useEffect(() => {
    AsyncStorage.getItem("uid")
      .then((uid) => {
        setUid(uid);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!debounceSearch.trim()) {
      setSearchResults([]);
      return;
    }

    if (debounceSearch && uid) {
      axios
        .get(`http://10.0.2.2:4000/devicesalers`, {
          params: {
            name: debounceSearch,
            userId: uid,
          },
        })
        .then((response) => {
          console.log(response.data);
          setSearchResults(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [debounceSearch, uid]);

  useEffect(() => {
    if (uid) {
      axios
        .get(`http://10.0.2.2:4000/devicesalers/user/${uid}/devices`)
        .then((response) => {
          setDevices(response.data);
        })
        .catch((error) => {
          console.log(error);
          console.log(uid);
        });
    }
  }, [uid]);

  return (
    <View className="">
      <View className="flex items-center mb-8">
        <SalerSearch
          setSearchDevices={setSearchDevices}
          searchDevices={searchDevices}
        />
      </View>
      <View className="flex items-center">
        {devices &&
          devices.map((device) => (
            <TouchableOpacity
              key={device._id}
              onPress={() =>
                navigation.navigate("ViewDeviceSaler", {
                  device: device,
                })
              }
            >
              <ProductCard product={device} />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default DeviceSale;
