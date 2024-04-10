import React from "react";
import { View, Text, Image } from "react-native";

import Images from "../../../assets";

const user = {
  name: "Nguyễn Thị A",
  avatar: Images.userFemale,
  recents: [
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
    },
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
    },
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
    },
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
    },
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
    },
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
    },
  ],
  contacts: [
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
      lastMessage: "Cảm ơn em nhé!.",
      timeSent: "8h00PM",
      unRead: 2,
    },
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
      lastMessage: "Cảm ơn em nhé!.",
      timeSent: "8h00PM",
      unRead: 2,
    },
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
      lastMessage: "Cảm ơn em nhé!.",
      timeSent: "8h00PM",
      unRead: 0,
    },
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
      lastMessage: "Cảm ơn em nhé!.",
      timeSent: "8h00PM",
      unRead: 0,
    },
    {
      name: "Nguyễn Thị B",
      avatar: Images.userFemale,
      lastMessage: "Cảm ơn em nhé!.",
      timeSent: "8h00PM",
      unRead: 2,
    },
  ],
};

const UserInfo = ({ user }) => {
  return (
    <View className="flex-row items-center justify-start">
      <Image
        source={user.avatar}
        className="w-full h-32 rounded-lg object-cover mb-2"
        style={{ width: 64, height: 64 }}
      />
      <Text className="text-2xl font-semibold ml-4">
        {user.name} {" (You)"}
      </Text>
    </View>
  );
};

const OtherUser = ({ user }) => {
  return (
    <View className="mr-2">
      <Image
        source={user.avatar}
        className="w-full h-32 rounded-lg object-cover mb-2"
        style={{ width: 40, height: 40 }}
      />
      <Text className="text-xs font-normal">{user.name}</Text>
    </View>
  );
};

const ContactUser = ({ user }) => {
  return (
    <View className="my-2 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <Image
          source={user.avatar}
          className="w-full h-32 rounded-lg object-cover mb-2 mr-4"
          style={{ width: 52, height: 52 }}
        />
        <View className="w-60">
          <Text className="text-lg font-semibold">{user.name}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-base">{user.lastMessage}</Text>
            <Text className="text-xs">{user.timeSent}</Text>
          </View>
        </View>
      </View>
      {user.unRead != 0 ? (
        <View className="w-6 h-6 rounded-full bg-blue-700 items-center justify-center">
          <Text className="text-normal text-white">{user.unRead}</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const ContactCustomer = () => {
  return (
    <View className="w-full">
      <UserInfo user={user} />

      <View className="flex-row items-center justify-between mt-4">
        {user.recents.slice(0, 5).map((contact) => (
          <OtherUser user={contact} />
        ))}
      </View>

      <View className="mt-12">
        {user.contacts.slice(0, 5).map((contact) => (
          <ContactUser user={contact} />
        ))}
      </View>
    </View>
  );
};

export default ContactCustomer;
