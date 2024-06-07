import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthMenu from '../screens/AuthMenu'
import { Login } from '../screens/Login'
import { Register } from '../screens/Register'
const Stack = createNativeStackNavigator()
export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name='Welcome'
                component={AuthMenu}
            />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})