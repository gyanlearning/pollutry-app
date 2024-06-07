import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './navigation/AppStack'
import AuthStack from './navigation/AuthStack'
import TabNavigator from './navigation/TabNavigation'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, logout } from './redux/slice/authSlice'
import DailyTask from './screens/DailyTask'
const Stack = createNativeStackNavigator()
export default function RootStack() {
  const isUserLogin = useSelector((state: any) => state.auth.status);
  const dispatch = useDispatch();
  const getUser = async () => {
    const data = await AsyncStorage.getItem('data');

    if (data === null) {

      return dispatch(logout())

    }
    return dispatch(login(JSON.parse(data)))


  };
  useMemo(() => {
    getUser();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
         {
          isUserLogin?
          <Stack.Screen name='logged' component={TabNavigator}/>
          :
          <Stack.Screen name='notauth' component={AuthStack} />
         }
         <Stack.Screen name="dailyTask"  component={DailyTask}  options={{headerShown:true,title:"Batch Daily Tasks"}} />
      </Stack.Navigator>
    </NavigationContainer>




  )
}

const styles = StyleSheet.create({})