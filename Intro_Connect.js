import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ImageBackground, StyleSheet, Button, TouchableOpacity, Text, View, Alert } from 'react-native';
import home_screen from './assets/home_screen.png'; 

export default function Intro_Connect() {

  return (
    <View style={styles.container}>
      <ImageBackground source={home_screen} style={styles.home_screen}>
        <View style={styles.fixToText}>
          <Button title="Get Started" color="white" onPress={() => Alert.alert('Get Started')}/>
        </View>
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
  },
  fixToText: {
    justifyContent: 'center',
    backgroundColor:'#F1427B'
  }
});
