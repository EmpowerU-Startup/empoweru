import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ImageBackground, StyleSheet, Button, TouchableOpacity, Text, View, Alert } from 'react-native';
import home_screen from './assets/home_screen.png'; 

import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

import { withAuthenticator } from 'aws-amplify-react-native';

function App() {

  // return (
  //   <View style={styles.container}>
  //     <ImageBackground source={home_screen} style={styles.home_screen}>
  //       <View style={styles.fixToText}>
  //         <Button title="Get Started" color="white" onPress={() => Alert.alert('Get Started')}/>
  //       </View>
  //     </ImageBackground>
  //   </View>
  // );
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }


  return (
    <View style={styles.container}>
      <Text> +  = React Native + Amplify </Text>
      <Button title="Sign Out" color="tomato" onPress={signOut} />
      <StatusBar style="auto" />
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

// wrap the App component as shown below
export default withAuthenticator(App);