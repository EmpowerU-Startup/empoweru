import * as React from 'react';
// import { ImageBackground, StyleSheet, Button, TouchableOpacity, Text, View, Alert } from 'react-native';
// import home_screen from './assets/home_screen.png'; 
import Onboard from './Onboard'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Amplify from 'aws-amplify';
// import { Auth } from 'aws-amplify';
// import config from './src/aws-exports';
// Amplify.configure({
//   ...config,
//   Analytics: {
//     disabled: true,
//   },
// });


// import { withAuthenticator } from 'aws-amplify-react-native';

// App Navigator
const Navigator = createStackNavigator({
  Home: { screen: Home },
  Onboard: { screen: Onboard },
});

/**
* createAppContainer
*
* Responsible for managing app state and linking
* the top-level navigator to the app environment.
*
*/
const App = createAppContainer(Navigator);

export default App;



// export default function App() {

//    //Home Screen Code
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={home_screen} style={styles.home_screen}>
//         <View style={styles.fixToText}>
//           <Button title="Get Started" color="white" onPress={() => Alert.alert('Get Started')}/>
//         </View>
//       </ImageBackground>
//     </View>
//   );

  // Onboarding screens code - now in Onboard.js
  // return (
  //   <View style={styles.contain}>
  //     <Onboarding/>
  //     <StatusBar style='auto'></StatusBar>
  //   </View>
  // );

 

  //AWS Code
  // async function signOut() {
  //   try {
  //     await Auth.signOut();
  //   } catch (error) {
  //     console.log('Error signing out: ', error);
  //   }
  // }


  // return (
  //   <View style={styles.container}>
  //     <Text> +  = React Native + Amplify </Text>
  //     <Button title="Sign Out" color="tomato" onPress={signOut} />
  //     <StatusBar style="auto" />
  //   </View>
  // );


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   contain: {
//     flex: 1, 
//     backgroundColor: '#f8f8f8',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   home_screen: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   fixToText: {
//     justifyContent: 'center',
//     backgroundColor:'#F1427B'
//   }
// });

// wrap the App component as shown below
// export default withAuthenticator(App);