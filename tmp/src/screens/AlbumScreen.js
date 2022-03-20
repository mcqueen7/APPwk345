import React from "react";
import { View } from "react-native";
import AlbumList from "../components/AlbumList";
import albumData from "../json/album_section.json";
import {NativeBaseProvider,Box, Text,Heading,HStack} from "native-base";

const AlbumScreen = ({ navigation }) => {
  return (
    <Box bg="white">
      <AlbumList 
        navigation={navigation}
      />
    </Box>
  );
};

export default AlbumScreen;
