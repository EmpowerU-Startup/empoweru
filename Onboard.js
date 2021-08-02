import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, View } from 'react-native';
import Onboarding from './components/Onboarding'; 

export default class Onboard extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return { };
    };

    render() {

        const { navigate, state } = this.props.navigation;
        
        return (
            <View style={styles.contain}>
              <Onboarding/>
              <StatusBar style='auto'></StatusBar>
            </View>
          );

    }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contain: {
    flex: 1, 
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center'
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
