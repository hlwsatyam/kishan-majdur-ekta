import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Footer from "./Footer";
import Icon from "react-native-vector-icons/FontAwesome";
import { WebView } from "react-native-webview";
import { ScrollView } from "react-native";
import { Form } from "./HomeCarousel";
const Contact = () => {
  const [contactList, setContactList] = React.useState([
    { icon: "phone", title: "+91 7065977939" },
    { icon: "envelope", title: "info@rvbmuniverse.com" },
    { icon: "envelope", title: "kisanmajdurekta@gmail.com" },
    { icon: "credit-card", title: "we Are a Team Of Rakshan Foundation" },
  ]);
  return (
    <ScrollView>
      <View className="mt-4">
        {contactList.map((item, idx) => (
          <View
            key={idx * idx}
            className="flex-row mb-2 items-center border-b-red-600 rounded-full pb-2 border-b gap-x-4" >
            <Text className="bg-stone-400  p-3 rounded-full justify-center flex-row items-center ">
              <Icon name={item.icon} size={30} color="#900" />
            </Text>
            <Text className="font-semibold">{item.title}</Text>
          </View>
        ))}
        <Form />
        <GoogleMap />

        <Footer />
      </View>
    </ScrollView>
  );
};

export default Contact;

const GoogleMap = () => {
  return (
    <View className="w-full my-3 h-[200px]">
      <WebView
        style={{ width: "100$" }}
        source={{
          html: '<iframe src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=A Block, Sector 16, Noida, Uttar Pradesh 201301.&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" ></iframe>',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
