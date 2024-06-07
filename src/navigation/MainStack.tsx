import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigation';
 const Stack =createNativeStackNavigator();
export default function MainStack() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="auth" component={AuthStack}/>
    <Stack.Screen name="auth" component={TabNavigator}/>
  </Stack.Navigator>
  )
}