import { View, Text, Linking } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const Footer = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  const [socialList, setSocialList] = useState([
    {
      icon: "facebook",
      url: "https://www.facebook.com/people/Kisanmajdur-Ekta/61554986820171/",
    },
    { icon: "instagram", url: "https://www.instagram.com/kishannmajdurekta/" },
    { icon: "twitter", url: "https://kishanmajdurekta.in/index.php" },
    { icon: "linkedin", url: "https://kishanmajdurekta.in/index.php" },
  ]);

  return (
    <View className="bg-red-300">
      <View className="bg-red-900 p-4 rounded-t-[11px]">
        <Text className="text-center text-white font-semibold text-[8px] ">
          Copyright © 2023, Kisan Majdoor Ekta
        </Text>
        <View className="flex-row justify-center items-center gap-x-4 mt-4 ">
          {socialList.map((item, idx) => (
            <TouchableOpacity
              key={idx * idx - idx}
              onPress={() => handleLinkPress(item.url)}
              className="bg-red-800 p-2 rounded-full flex-row justify-center items-center w-[50px] h-[50px]  "
            >
              <Text>
                <Icon name={item.icon} size={30} color="white" />
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text className="text-white text-[10px] text-center my-3">
          Designed & Developed by{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => handleLinkPress("https://rvbmuniverse.com/")}
          >
            RVBM Universe Pvt. Ltd.
          </Text>
        </Text>
        <Text className="text-white text-[10px] text-center my-3">
          App Version 0.0.0.1
        </Text>
      </View>
    </View>
  );
};

export default Footer;
