import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./src/pages/Splash";
import Home from "./src/pages/Home";
import Header from "./src/pages/Header";
import Demand from "./src/pages/Demand";
import Development from "./src/pages/Development";
import Gallery from "./src/pages/MainGallery";
import Contact from "./src/pages/Contact";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }} // Hide header for the splash screen
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header title="Your Header Title" />,
          }}
        />
        <Stack.Screen
          name="demand"
          component={Demand}
          options={{
            header: () => <Header title="Your Header Title" />,
          }}
        />
        <Stack.Screen
          name="development"
          component={Development}
          options={{
            header: () => <Header title="Your Header Title" />,
          }}
        />
        <Stack.Screen
          name="gallery"
          component={Gallery}
          options={{
            header: () => <Header title="Your Header Title" />,
          }}
        />
        <Stack.Screen
          name="contact"
          component={Contact}
          options={{
            header: () => <Header title="Your Header Title" />,
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
