import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Login } from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './src/screens/Register';
import Home from './src/screens/Home';
import RootStack from './src/RootStack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ToastProvider } from 'react-native-toast-notifications';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <RootStack />
      </ToastProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({})