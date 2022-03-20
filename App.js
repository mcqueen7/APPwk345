import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import {NativeBaseProvider} from 'native-base';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <StatusBar />
        <Header />
        <AlbumList />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
