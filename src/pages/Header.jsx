import { View, Text, Image, Animated, Easing } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import MarqueeView from "react-native-marquee-view";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  return (
    <View className="mt-9">
      <Banner />
      <BannerBottomList />
    </View>
  );
};

export default Header;

const Banner = () => {
  return (
    <View className="bg-[#008000c7] p-2">
      <View className="flex-row gap-x-2 items-center justify-between">
        <Image source={logo} className="w-[55px] rounded-full h-[55px] " />
        <View className="flex-1">
          <Text className="text-red-800  font-extrabold text-center text-[14px] ">
            किसान मजदूर एकता में आपका स्वागत है।{" "}
          </Text>
          <MarqueeView speed="0.2">
            <View>
              <Text className="text-black  font-extrabold ">
                किसानों को समृद्ध सक्षम और प्रगतिशील बनाने में एक ठोस कदम।
              </Text>
            </View>
          </MarqueeView>
        </View>
        <Image source={logo} className="w-[55px] rounded-full h-[55px] " />
      </View>
    </View>
  );
};

const BannerBottomList = () => {
  const [list, setlist] = useState([
    { route: "Home", label: "मुख्य पृष्ठ" },
    { route: "demand", label: "हमारी मांगें" },
    { route: "development", label: "प्रगतिशील किसान" },
    { route: "gallery", label: "गैलरी" },
    { route: "contact", label: "संपर्क करें" },
  ]);
  const navigation = useNavigation();
  return (
    <View className="bg-red-800 py-4 ">
      <View className="flex-row  justify-around">
        {list.map((item, idx) => (
          <Text
            key={idx * idx}
            onPress={() => navigation.navigate(item.route)}
            className="text-white font-semibold"
          >
            {item.label}
          </Text>
        ))}
      </View>
    </View>
  );
};
