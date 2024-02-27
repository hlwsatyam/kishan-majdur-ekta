import React, { Component, useEffect, useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  FlatList,
} from "react-native";
import slider1 from "../../assets/Image/slider2.png";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import TopicList from "../Data/BillList.json";
import axios from "axios";
import { baseURLApi } from "../../api/CallingApi";
const styles = StyleSheet.create({
  wrapper: { height: 500 },
  slide1: {
    flex: 1,

    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        loop={true}
        autoplay={true}
        style={styles.wrapper}
        showsButtons={false}
      >
        <View style={styles.slide1}>
          <Image source={slider1} className="w-[100%] h-[100%]" />
          <View className="absolute w-[300px] top-0 right-0 h-[100px] ">
            <TextArea />
            <Form />
          </View>
          <Social />
        </View>
      </Swiper>
    );
  }
}
const Social = () => {
  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleWhatsapp = (phoneNumber) => {
    Linking.openURL(`https://wa.me/${phoneNumber}`);
  };
  return (
    <View className="absolute px-2 py-4 left-0 bottom-0 ">
      <TouchableOpacity
        onPress={() => handleCall("7065977939")}
        className="flex-row bg-black/25 shadow-white p-1 rounded-full justify-center items-center gap-x-5 mt-2"
      >
        <Text>
          <Icon name="phone" size={30} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleWhatsapp("7065977939")}
        className="flex-row   p-1 rounded-full justify-center items-center gap-x-5 mt-2"
      >
        <Text>
          <Icon name="whatsapp" size={30} color="rgb(0, 255, 34)" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export const Form = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [topicModalVisible, setTopicModalVisible] = useState(false);
  const [selectedTopic, setSelectedToic] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
    topic: "",
    message: "",
    phone: "",
  });
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  let topics = TopicList.map((item) => item.que);

  const handleSelectState = (state) => {
    setSelectedState(state);
    handleChange(state, "state");
    setModalVisible(false);
  };
  const handleSelectTopic = (state) => {
    setSelectedToic(state);

    handleChange(state, "topic");
    setTopicModalVisible(false);
  };
  const handleChange = (text, field) => {
    setForm((prev) => ({
      ...prev,
      [field]: text,
    }));
  };

  const handleFormSubmit = async () => {
    await axios
      .post(`${baseURLApi}/auth`, {
        name: form.name,
        email: form.email,
        state: form.state,
        phone: form.phone,
        topic: form.topic,
        message: form.message,
        address: form.address,
      })
      .then((response) => {
        if (response.status === 201) {
          return Alert.alert("Success", "Form Submitted Successfully");
        }
      })
      .catch((err) =>
        Alert.alert("Failed", "Something Went Worng. Please Try Again.")
      );
  };

  return (
    <View className="py-4 rounded-2xl m-2   bg-black/60 shadow-xl">
      <View className="flex-row justify-center my-2 gap-x-5 ">
        <View className="w-[40%]">
          <Text className="text-white text-[10px]  mb-2 font-bold">नाम *</Text>
          <TextInput
            onChangeText={(text) => handleChange(text, "name")}
            placeholder="Enter Name"
            className="bg-white text-black px-2  rounded-full  "
          />
        </View>
        <View className="w-[40%]">
          <Text className="text-white text-[10px] mb-2 font-bold">ईमेल *</Text>
          <TextInput
            onChangeText={(text) => handleChange(text, "email")}
            placeholder="Enter Email*"
            className="bg-white text-black px-2 rounded-full  "
          />
        </View>
      </View>
      <View className="flex-row justify-center my-2 gap-x-5 ">
        <View className="w-[40%]">
          <Text className="text-white text-[10px]  mb-2 font-bold">फ़ोन *</Text>
          <TextInput
            onChangeText={(text) => handleChange(text, "phone")}
            placeholder="Enter Mobile"
            className="bg-white text-black px-2  rounded-full  "
          />
        </View>
        <View className="w-[40%]">
          <Text className="text-white text-[10px] mb-2 font-bold">पता *</Text>
          <TextInput
            onChangeText={(text) => handleChange(text, "address")}
            placeholder="Enter Address*"
            className="bg-white text-black px-2 rounded-full  "
          />
        </View>
      </View>
      <View className="flex-row justify-center my-2 gap-x-5 ">
        <View className="w-[40%]">
          <Text className="text-white text-[10px]  mb-2 font-bold">
            राज्य *
          </Text>
          <TouchableOpacity
            className="h-[40px] overflow-hidden"
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text>{selectedState ? selectedState : "Select State"}</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={{}}>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <FlatList
                  data={states}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectState(item)}>
                      <Text style={{ paddingVertical: 10 }}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                />
              </View>
            </View>
          </Modal>
        </View>

        <View
          // style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          className="w-[40%]"
        >
          <Text className="text-white text-[10px]  mb-2 font-bold">विषय *</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
            className="h-[40px] overflow-hidden"
            onPress={() => setTopicModalVisible(true)}
          >
            <Text>{selectedTopic ? selectedTopic : "Select Topic"}</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={topicModalVisible}
            onRequestClose={() => {
              setTopicModalVisible(false);
            }}
          >
            <View style={{}}>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <FlatList
                  data={topics}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectTopic(item)}>
                      <Text style={{ paddingVertical: 10 }}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <View className="my-3 px-3 ">
        <Text className="text-white text-[10px] mb-2 font-bold">संदेश *</Text>
        <TextInput
          onChangeText={(text) => handleChange(text, "message")}
          placeholder="Enter Topic*"
          className="bg-white text-black px-2 rounded-full  "
        />
      </View>
      <View className="px-2">
        <Button
          onPress={handleFormSubmit}
          color={"black"}
          title="मेसेज भेजें"
        />
      </View>
    </View>
  );
};

const TextArea = () => {
  return (
    <View>
      <Text className="text-2xl ~ font-extrabold text-white ">
        {" "}
        किसान मजदूर{" "}
      </Text>
      <Text className="text-2xl font-extrabold text-white ">
        {" "}
        एकता में आपका स्वागत है{" "}
      </Text>
      <View className="w-[90px]">
        <Button color={"red"} title="संपर्क करें →" />
      </View>
    </View>
  );
};
