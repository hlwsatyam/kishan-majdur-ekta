import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import SwiperComponent from "./HomeCarousel";
import MarqueeView from "react-native-marquee-view";
import BillList from "../Data/BillList.json";
import PointCardList from "../Data/PointCardList.json";

import Footer from "./Footer";
const Home = () => {
  return (
    <View className="flex-1 ">
      <ScrollView>
        <View className="">
          <SwiperComponent />
        </View>
        <MarqueText
          textStyle={"text-red-800 mt-4 font-extrabold "}
          text={"किसान एवं खेतीहर मजदूर जीवन सुरक्षा एकता में आपका स्वागत है!"}
        />
        <MarqueText
          textStyle={"text-red-800 mb-4 text-black text-sm font-extrabold "}
          text={
            "Welcome to Farmers and Agricultural Laborers Life Security Unity."
          }
        />
        {BillList.map((item, idx) => (
          <FaqTab key={idx} item={item} />
        ))}
        <AboutSwamiNath />

        <View className="p-2">
          {PointCardList.map((item, idx) => (
            <CardForPoint key={idx} item={item} />
          ))}
        </View>
        <Popularfarmer />
        <HomeGallery />
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Home;

export const MarqueText = ({ speed, textStyle, text, ...style }) => {
  return (
    <MarqueeView speed={speed ? speed : 0.1}>
      <View>
        <Text className={textStyle}>{text}</Text>
      </View>
    </MarqueeView>
  );
};

export const FaqTab = ({ item }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <View className="m-1 rounded-xl bg-[#5753c9a8] border-blue-500  border">
      <TouchableOpacity
        className="flex-row bg-[#831218d9] p-1  rounded-xl justify-between items-center  "
        onPress={() => setIsShown(!isShown)}
      >
        <Text className="text-white text-[13px] font-bold flex-1 ">
          {" "}
          {item?.que}{" "}
        </Text>
        <TouchableOpacity onPress={() => setIsShown(!isShown)}>
          <Text className="text-white"> {isShown ? "-" : "+"} </Text>
        </TouchableOpacity>
      </TouchableOpacity>
      {isShown ? (
        <View>
          {item?.ans.map((itm, idx) => (
            <Text key={idx * idx} className="text-white text-[10px] my-1">
              {" "}
              {itm}
            </Text>
          ))}
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

const AboutSwamiNath = () => {
  const [list, setList] = useState([
    {
      heading: "मौद्रिक कोलाहल का समर्थन:",
      details:
        "डॉ। स्वामी नाथन ने किसानों के साथ मिलकर मौद्रिक स्वास्थ्य बनाए रखने के लिए नीतियों का समर्थन किया है।",
    },
    {
      heading: "कृषि समृद्धि के लिए नई तकनीक का प्रोत्साहन:",
      details:
        "उन्होंने किसानों को नई तकनीक और कृषि में नवाचार को अपनाने के लिए प्रेरित किया है, जो उनकी उत्पादकता बढ़ाने में मदद कर सकता है।",
    },
    {
      heading: "फसलों के न्यूनतम समर्थन मूल्य:",
      details:
        " किसानों को उच्च मूल्य नहीं मिलने पर उनकी समस्याओं का समर्थन करने के लिए, उन्होंने सरकार से न्यूनतम समर्थन मूल्यों को बढ़ाने की मांग की है।",
    },
    {
      heading: "किसान ऋणों का क्षतिपूर्ति:",
      details:
        "डॉ। स्वामी नाथन ने किसानों के ऊपर बोझिल ऋणों का समर्थन करने के लिए नीतियों को बनाया है ताकि वे आराम से अपनी किसानी चला सकें।",
    },
    {
      heading: "समृद्धि के लिए शिक्षा:",
      details:
        " उन्होंने किसानों को नई तकनीकों और स्थानीय उत्पादों के लिए शिक्षा प्रदान करने के लिए कई प्रोग्रामों की शुरुआत की है।",
    },
  ]);
  return (
    <View className="bg-black p-1 my-4 ">
      <Text className="text-white text-xl border-b-2 w-[210px] mb-5 pb-1 border-white ">
        डॉ। स्वामी नाथन के बारे में
      </Text>
      <Text className="text-white">
        डॉ। स्वामी नाथन, एक प्रमुख स्वास्थ्य चिकित्सक और स्वास्थ्य परामर्शक हैं,
        जिनका उद्देश्य लोगों को स्वस्थ जीवनशैली की दिशा में मार्गदर्शन करना है।
        उनका विशेषज्ञता क्षेत्र स्वास्थ्य और रोग प्रबंधन, जीवनशैली परिवर्तन और
        आहार विज्ञान में है। उनका दीर्घकालिक अनुभव और संवेदनशीलता लोगों को
        होलिस्टिक स्वास्थ्य देखने का आदान-प्रदान करते हैं। उनकी वेबसाइट एक
        साधारित स्वास्थ्य जीवनशैली, रोग प्रबंधन और पूर्णता की दिशा में
        साकारात्मक सूचना और सुझावों से भरी है। डॉ। स्वामी नाथन का अनुभव और
        विशेषज्ञता लोगों को स्वस्थ और खुश जीवन की दिशा में मदद करने में आगे
        बढ़ने में सहायक हैं।
      </Text>
      {list.map((item, idx) => (
        <View key={idx * idx * idx} className="my-2">
          <Text className="text-white my-1 font-bold text-[12px] ">
            {item?.heading}
          </Text>
          <Text className="text-white text-[12px] "> {item?.details} </Text>
        </View>
      ))}
      <Text className="text-white text-[12px] ">
        इन नीतियों के माध्यम से, डॉ। स्वामी नाथन ने किसानों के लिए विभिन्न
        क्षेत्रों में सुधार करते हुए उनकी स्थिति में सुधार करने का प्रयास किया
        है, साथ ही उन्हें आर्थिक समृद्धि और स्वास्थ्य के क्षेत्र में सुधार करने
        का मौका प्रदान किया है।
      </Text>
    </View>
  );
};

const CardForPoint = ({ item }) => {
  return (
    <View
      style={styles.shadow}
      className="h-[200px] flex-col justify-between    "
    >
      <Text className="px-2 pt-3">{item?.text}</Text>
      <Text className="bg-red-900 text-center text-xl font-extrabold text-white py-2 ">
        {item.heading}
      </Text>
    </View>
  );
};
export const Popularfarmer = () => {
  const [list, setList] = useState([
    {
      name: "श्री. तुला राम उप्रेती",
      jivni:
        "श्री. तुला राम उप्रेती सिक्किम से हैं। वह 98 वर्ष के हैं और उनका एक विशाल संयुक्त परिवार है जिसमें 8 बेटे और 7 बेटियां, 104 पोते-पोतियां और परपोते-पोतियां शामिल हैं। उनकी 5वीं कक्षा तक की शिक्षा तासी नामग्याल हायर सेकेंडरी स्कूल (अब टीएन सीनियर सेकेंडरी स्कूल) में हुई। उन्होंने 25 वर्षों के कार्यकाल के लिए असम लिंग्ज़ी ग्राम पंचायत इकाई के अंतर्गत लिंग्ज़ी वार्ड से एक स्थानीय पंचायत के लिए काम किया है। वह दो बार पंचायत अध्यक्ष रह चुके थे। उनके बेटे केएन उप्रेती 1979-99 तक रेनॉक निर्वाचन क्षेत्र से पूर्व मंत्री और विधायक रहे हैं। उन्हें जैविक खेती पुरस्कार 2023 के लिए सम्मानित किया गया।",
      image: "https://kishanmajdurekta.in/Assets/img/tula.png",
    },
    {
      name: "श्री. चेरुवायल रमन",
      jivni:
        "चेरुवायल रमन 75 वर्षीय धान किसान हैं जो केरल के वायनाड जिले में रहते हैं। वह कुराचिया के आदिवासी समुदाय से हैं। गांव वाले उसे प्यार से रामेत्तन कहते हैं। जब वह केवल 10 वर्ष के थे तब उन्होंने खेतों में काम करना शुरू कर दिया था। 1969 में अपने चाचा की मृत्यु के बाद उन्होंने धान की खेती को गंभीरता से लिया। उन्होंने अपने चाचा द्वारा छोड़ी गई 40 एकड़ जमीन पर चावल उगाना शुरू किया। उन्होंने 2000 के दशक की शुरुआत में स्वदेशी धान के बीजों को संरक्षित करना शुरू किया।",
      image: "https://kishanmajdurekta.in/Assets/img/che.png",
    },
    {
      name: "श्री. नेकराम शर्मा",
      jivni:
        "नेकराम शर्मा 59 वर्षीय किसान हैं। वह हिमाचल प्रदेश के मंडी जिले की करसोग घाटी में रहते हैं। 1984 में जब वे युवा थे, तब उन्हें सरकारी नौकरी के लिए अस्वीकार कर दिया गया था। ठुकराए जाने के बाद उन्होंने अपने परिवार की 22 बीघे अनुपयोगी जमीन पर खेती शुरू कर दी। उनके द्वारा फल और सब्जियाँ उगाई जाती थीं। प्रयोग के तौर पर उन्होंने जैविक खेती का प्रयास किया। रासायनिक उर्वरकों और कीटनाशकों के उपयोग के बिना फसलों की खेती का पूरा ज्ञान प्राप्त करने के बाद, उन्होंने पूरी तरह से प्राचीन कृषि तकनीकों की ओर रुख किया। उनके इस कदम ने उन्हें 2023 पद्मी श्री पुरस्कार का विजेता बना दिया।",
      image: "https://kishanmajdurekta.in/Assets/img/nek.png",
    },
    {
      name: "श्री. पटायत साहू",
      jivni:
        "पतायत साहू 65 वर्षीय व्यक्ति हैं जो ओडिशा के कालाहांडी जिले के नंदोल गांव में रहते हैं। उनके दादा एक वैद्य (पारंपरिक चिकित्सक) थे। इससे उन्हें औषधीय पौधों में रुचि हो गई और अपनी शिक्षा पूरी करने के बाद उन्होंने अपने दादा से उपचार पद्धतियां सीखीं। उन्होंने पारंपरिक उपचार विधियों और औषधीय पौधों और उनके उपयोग पर विभिन्न पांडुलिपियां पढ़ीं। शुरुआत में औषधीय पौधों के बारे में सीखना उनका शौक था लेकिन बाद में उन्होंने 40 साल पहले एक औषधीय उद्यान उगाना शुरू किया और समय के साथ इसमें नई प्रजातियाँ जोड़ीं।",
      image: "https://kishanmajdurekta.in/Assets/img/pat.png",
    },
  ]);
  return (
    <View className=" ">
      <Text className="text-black my-2 text-center text-xl font-bold">
        पद्म पुरस्कार किसानों का इतिहास
      </Text>
      <Text className="text-center text-black font-bold text-[10px]">
        पद्म पुरस्कार भारत सरकार द्वारा प्रतिवर्ष दिया जाने वाला उच्चतम सिविल
        सम्मान है। इसे 1954 में स्थापित किया गया था। पुरस्कार विभिन्न क्षेत्रों
        में उत्कृष्टता दिखाने वाले व्यक्तियों को सम्मानित करने के लिए प्रदान
        किया जाता है, जैसे कला, विज्ञान, साहित्य, सामाजिक सेवा, खेल, और यातायात।
        यह विभिन्न पद्म विभूषण, पद्म भूषण, और पद्मश्री से मिलकर बना होता है,
        जिनमें विभिन्न श्रेणियां शामिल हैं।
      </Text>
      {list.map((item, idx) => (
        <View key={idx * idx} className="bg-red-900 m-2 rounded p-2 ">
          <Text className="text-white text-[12px] "> {item?.jivni} </Text>
          <View className="flex-row items-center gap-x-4 mt-4 ">
            <Image
              source={{ uri: item?.image }}
              className="w-[100px] h-[100px] rounded-full "
            />
            <Text className="text-[13px] text-white font-bold ">
              {" "}
              {item?.name}{" "}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export const HomeGallery = () => {
  const [list, setList] = useState([
    { image: "https://kishanmajdurekta.in/Assets/img/rj.png" },
    { image: "https://kishanmajdurekta.in/Assets/img/md.png" },
    { image: "https://kishanmajdurekta.in/Assets/img/ng.png" },
    { image: "https://kishanmajdurekta.in/Assets/img/swami.png" },
    { image: "https://kishanmajdurekta.in/Assets/img/img5.jpg" },
    { image: "https://kishanmajdurekta.in/Assets/img/img6.jpg" },
    { image: "https://kishanmajdurekta.in/Assets/img/go.png" },
  ]);
  return (
    <View className="my-4">
      {list.map((item, index) => (
        <View
          style={styles.shadow}
          key={index * 23.23}
          className="  p-2 m-2 rounded-2xl bg-slate-300 "
        >
          <Image
            source={{ uri: item?.image }}
            className="w-[100%] h-[300px]  rounded-2xl m-auto "
          />
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 2,
    // background color must be set
    backgroundColor: "", // invisible color
  },
});
