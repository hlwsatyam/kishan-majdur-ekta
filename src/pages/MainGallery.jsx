import { View, Text, ScrollView } from "react-native";
import React from "react";
import Footer from "./Footer";
import { HomeGallery } from "./Home";

const Gallery = () => {
  return (
    <ScrollView>
      <HomeGallery />
      <Footer />
    </ScrollView>
  );
};

export default Gallery;
