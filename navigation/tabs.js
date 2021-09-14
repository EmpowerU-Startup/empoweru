import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IntroConnect from '../Intro_Connect';
import IntroExplore from '../Intro_Explore';
import IntroResources from '../Intro_Resources';

const Tab = createBottomTabNavigator();
const CustomTabBarButtom = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: '#f8a964',
            }}>
            {children}
        </View>
    </TouchableOpacity>
);
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    height: 90,
                    ...styles.shadow
                }
            }}>
            <Tab.Screen
                name="Home"
                component={IntroConnect}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../assets/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#f8a964' : '#748c94'
                                }}
                            />
                            {/* <Text
                                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                HOME
                            </Text> */}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={IntroConnect}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../assets/search.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#f8a964' : '#748c94'
                                }}
                            />
                            {/* <Text
                                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                Search
                            </Text> */}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Post"
                component={IntroConnect}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/post.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: '#fff',
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButtom {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Bookmarks"
                component={IntroConnect}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../assets/bookmark.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#f8a964' : '#748c94'
                                }}
                            />
                            {/* <Text
                                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                HOME
                            </Text> */}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={IntroConnect}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../assets/profile.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#f8a964' : '#748c94'
                                }}
                            />
                            {/* <Text
                                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                HOME
                            </Text> */}
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#888888',
        shadowOffset: {
            height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    }
})

export default Tabs;