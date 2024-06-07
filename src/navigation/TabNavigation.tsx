
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/AntDesign';
import Batch from '../screens/Batch';
import Account from '../screens/Account';


const iconSize = 22;
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveBackgroundColor: "#B6E0C7",

            tabBarActiveTintColor: "red",

            tabBarStyle: {
                position: "relative",
                backgroundColor: "#B6E0C7",
                padding: 4

            },
            tabBarLabelStyle: {
                fontSize: 11,
                fontFamily: "Poppins",
                paddingBottom: 6,
                color: "black"
            }
        

        }}

        >

            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({ }) => (
                        <Icon name='home' size={iconSize} color='black' />
                    ),
                }}

            />
            <Tab.Screen
                name='Batch'
                component={Batch}
                options={{
                    tabBarIcon: ({ }) => (
                        <Icon name='plus' size={iconSize} color='black' />
                    ),
                }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                options={{
                    tabBarIcon: ({ }) => (
                        <Icon name='user' size={iconSize} color='black' />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}



const styles = StyleSheet.create({
    UperNav: {
        position: "absolute",
        top: -40,
        backgroundColor: "teal",
        height: 60,
        width: 60,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        shadowColor: "white",
        shadowOffset: {
            width: 10,
            height: 10
        },
        zIndex: 1

    },
    whiteShadow: {
        backgroundColor: "white",
        height: 60,
        width: 65,
        borderRadius: 50,
        zIndex: -10,
        position: "absolute",
        top: -35
    }
})
