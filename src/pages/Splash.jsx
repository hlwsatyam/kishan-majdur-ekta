import { View, Text, Image, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import logo from "../../assets/Logo.png";

const Splash = ({ navigation }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
 
  useEffect(() => {
    const scaleAnimation = Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const opacityAnimation = Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
      delay: 500, // Delay the text animation by 500 milliseconds
    });

    // Start both animations
    Animated.parallel([scaleAnimation, opacityAnimation]).start();

    // Cleanup function to ensure animations are stopped when component unmounts
    return () => {
      scaleAnimation.stop();
      opacityAnimation.stop();
    };

    // Dependency array is empty to run the effect only once
  }, []);

  useEffect(() => {
    const navigationTimeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 1500);

    // Cleanup function to clear the timeout if component unmounts or navigation occurs
    return () => clearTimeout(navigationTimeout);
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#00FF00",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          transform: [{ scale: scaleValue }],
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={logo}
          // style={{ width: "70%", height: "70%" }}
          className="w-[300px] h-[300px] rounded-full  "
          resizeMode="contain"
        />
        <Animated.Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: 700,
            marginTop: 11,
            opacity: opacityValue,
          }}
        >
          गर्व से कहो - हम किसान है
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default Splash;
