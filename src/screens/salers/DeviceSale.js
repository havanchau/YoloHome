import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import SalerSearch from "../../components/SalerSearch/SalerSearch";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Images } from "../../../assets/index";
import { useDebounce } from "../../utilities";

const products = [
  {
    id: "1",
    name: "Máy lạnh Toshiba 1HP",
    price: 2000000,
    content:
      "Máy lạnh Toshiba 1 HP Inverter RAS-H10C4KCVG-V có công suất làm lạnh là 1 HP - 9.000 BTU nên phạm vi làm lạnh hiệu quả cho không gian dưới 15 m2.",
    image: Images.airConditioning,
  },
  {
    id: "2",
    name: "Đèn phòng thông minh",
    price: 1500000,
    content:
      "Đèn thông minh không chỉ đơn giản là để phát sáng — đèn còn giúp bạn giảm căng thẳng sau một ngày dài làm việc, khiến ngôi nhà của bạn ấm áp, sum vầy.",
    image: Images.light,
  },
  {
    id: "3",
    name: "Đèn phòng thông minh",
    price: 1500000,
    content:
      "Đèn thông minh không chỉ đơn giản là để phát sáng — đèn còn giúp bạn giảm căng thẳng sau một ngày dài làm việc, khiến ngôi nhà của bạn ấm áp, sum vầy.",
    image: Images.light,
  },
];

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
