import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, Button, Image, TouchableOpacity } from "react-native";
import io from "socket.io-client"; // Import io from socket.io-client
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../../../assets";
import { API_URL } from "../../contexts";

const ChatContact = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [newMessageContent, setNewMessageContent] = useState("");
  const [userIdSent, setUserIdSent] = useState("");
  const [userIdReceived, setUserIdReceived] = useState("");
  const [socket, setSocket] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    AsyncStorage.getItem("uid")
      .then((uid) => {
        setUserIdSent(uid);
      })
      .catch((error) => console.log(error));

    const userIdReceived = route.params.id;
    setUserIdReceived(userIdReceived);
  }, []);

  useEffect(() => {
    const newSocket = io("http://10.0.2.2:4000");
    setSocket(newSocket);

    if (newSocket) {
      newSocket.on("newMessage", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [userIdReceived, userIdSent]);

  const fetchMessages = () => {
    if (userIdReceived && userIdSent) {
      axios
        .get(`http://10.0.2.2:4000/messages/${userIdSent}/${userIdReceived}`)
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => console.log(error));
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post("http://10.0.2.2:4000/messages", {
        userIdSent,
        userIdReceived,
        content: newMessageContent,
      });

      setMessages([...messages, response.data]);
      setNewMessageContent("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View className="flex-row items-center justify-between mt-4">
        <View className="flex-row items-center justify-center mb-8">
          <TouchableOpacity
            onPress={() => navigation.navigate("MessageContact")}
          >
            <AntDesign name="left" size={24} className="mr-4 text-black" />
          </TouchableOpacity>
          <Image
            source={Images.userMale}
            style={{ width: 52, height: 52 }}
            resizeMode="cover"
            className="h-32 rounded-lg object-cover my-1 mr-4"
          />
          <View className="flex items-center justify-center">
            <Text className="text-lg font-medium">{route.params.name}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              flexDirection:
                item.userIdSent === userIdSent ? "row-reverse" : "row",
            }}
          >
            <View
              style={{
                maxWidth: "80%",
                backgroundColor:
                  item.userId === userIdSent ? "#CFFFE5" : "#E5E5EA",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Text>{item.content}</Text>
            </View>
          </View>
        )}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          className="flex-1 mr-4 border-2 border-gray-300 px-2 py-1 rounded-lg"
          placeholder="Type your message..."
          value={newMessageContent}
          onChangeText={setNewMessageContent}
        />
        <Button
          title="Send"
          className="px-2 py-1 rounded-2xl"
          onPress={sendMessage}
        />
      </View>
    </View>
  );
};

export default ChatContact;
