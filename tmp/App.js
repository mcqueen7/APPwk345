import React from "react";
import { StyleSheet, StatusBar} from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        {/* <StatusBar /> */}
        {/* <Header /> */}
        {/* <AlbumList /> */}
        <Navigation />  
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
