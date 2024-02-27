import { View, Text, ScrollView } from "react-native";
import React from "react";
import PageNavigator from "./PageNavigator";
import { FaqTab, MarqueText } from "./Home";
import BillList from "../Data/BillList.json";
import Footer from "./Footer";
const Demand = () => {
  return (
    <ScrollView>
      <View className="">
        <Text className="text-center mt-4 font-bold text-xl">
          {" "}
          हमारी मांगें{" "}
        </Text>
        <MarqueText
          textStyle={"text-red-800 mt-4 font-extrabold "}
          text={"किसान एवं खेतीहर मजदूर जीवन सुरक्षा एकता में आपका स्वागत है!"}
        />
        <MarqueText
          textStyle={"text-red-800 mb-4 font-extrabold "}
          text={
            "Welcome to Farmers and Agricultural Laborers Life Security Unity."
          }
        />
        {BillList.map((item, idx) => (
          <FaqTab key={idx} item={item} />
        ))}
      </View>
      <Footer />
    </ScrollView>
  );
};
export default Demand;
