import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import home_screen from './assets/home_screen.png'; 

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground source={home_screen} style={styles.home_screen}>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  home_screen: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
