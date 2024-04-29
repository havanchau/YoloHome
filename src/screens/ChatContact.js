import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, Button, Image } from "react-native";
import io from "socket.io-client"; // Import io from socket.io-client
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Images } from "../../assets";
import { API_URL } from "../contexts";

const ChatContact = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [newMessageContent, setNewMessageContent] = useState("");
  const [userIdSent, setUserIdSent] = useState("");
  const [userIdReceived, setUserIdReceived] = useState("");
  const [socket, setSocket] = useState(null);

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
    fetchMessages();

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

  const fetchMessages = async () => {
    try {
      axios
        .get(
          `http://10.0.2.2:4000/messages/${userIdSent}/${userIdReceived}`
        )
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.error("Error fetching messages:", error);
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
    <View style={{ flex: 1, padding: 20 }}>
      <View className="flex-row items-center justify-between mt-4">
        <View className="flex-row items-start justify-center">
          <Image
            source={Images.userMale}
            style={{ width: 52, height: 52 }}
            resizeMode="cover"
            className="h-32 rounded-lg object-cover my-1 mr-4"
          />
          <View className="flex items-start justify-center">
            <Text className="text-lg font-medium">Nguyễn Văn A</Text>
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
              flexDirection: item.userId === userIdSent ? "row-reverse" : "row",
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
          style={{
            flex: 1,
            marginRight: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 8,
          }}
          placeholder="Type your message..."
          value={newMessageContent}
          onChangeText={setNewMessageContent}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default ChatContact;
