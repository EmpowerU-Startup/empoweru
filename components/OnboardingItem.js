import React from 'react';
import { ViewBase, StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native';
import slides from '../slides.js';

export default OnboardingItem = ({item}) => {
    const{ width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain'}]}></Image>
            <View style={{flex: 0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    image: {
        flex: 0.7, 
        justifyContent: 'center'
    },
    title: {
        fontWeight: '800',
        fontSize: 28, 
        marginBottom: 10, 
        color: 'black',
        textAlign:'center'
    },
    description: {
        fontWeight: '300',
        color: 'black',
        textAlign:'center',
        paddingHorizontal: 64
    }

});