import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Popularfarmer } from "./Home";
import Footer from "./Footer";

const Development = () => {
  return (
    <ScrollView>
      <View>
        <View className='my-2 px-2' >
          <Text className="text-center font-extrabold text-xl ">
            प्रगतिशील किसानों का इतिहास
          </Text>
          <Text>
            पद्म पुरस्कार भारत सरकार द्वारा प्रतिवर्ष दिया जाने वाला उच्चतम
            सिविल सम्मान है। इसे 1954 में स्थापित किया गया था। पुरस्कार विभिन्न
            क्षेत्रों में उत्कृष्टता दिखाने वाले व्यक्तियों को सम्मानित करने के
            लिए प्रदान किया जाता है, जैसे कला, विज्ञान, साहित्य, सामाजिक सेवा,
            खेल, और यातायात। यह विभिन्न पद्म विभूषण, पद्म भूषण, और पद्मश्री से
            मिलकर बना होता है, जिनमें विभिन्न श्रेणियां शामिल हैं।
          </Text>
        </View>
        <Popularfarmer />
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Development;
