import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { ImageBackground, StyleSheet, Button, View } from 'react-native';
import home_screen from './assets/home_screen.png'; 
 
/**
 * Home screen
 */
export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
            <ImageBackground source={home_screen} style={styles.home_screen}>
                <View style={styles.fixToText}>
                <Button title="Get Started" color="white" 
                onPress={() => navigate(
                    'Onboard')}/>
                </View>
            </ImageBackground>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
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