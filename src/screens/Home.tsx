import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '../components/layout/AppHeader'
import { style } from '../styles/styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { todo } from '../constants'
import CheckBox from '@react-native-community/checkbox'

export default function Home() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <AppHeader />
      <ScrollView  
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.Container}>
          <View>
             <View>
              <View>
                <View>
                  <Icon name='clockcircleo' size={20} color={"#2ecc71"} />
                  <Text>Today</Text>
                </View>
                <Text>6</Text>
              </View>
              <View></View>
             </View>
          </View>
          <View style={styles.taskContainer}>
            <Text style={style.headingText}>Today Tasks
              <Icon name='checksquareo' size={17} color={"black"} />
            </Text>
            <View>
              {
                todo.map((task, index) => (
                  <View key={index} style={styles.taskMainWrapper}>
                    {
                      task.task.map((i, index) => (
                        <View key={index} style={styles.taskBox}>
                          <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) =>  setToggleCheckBox(newValue)}
                          />
                          <Text>{i.task}</Text>
                        </View>
                      ))
                    }
                  </View>
                ))
              }
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    width: "100%",
    padding: 5
  },
  taskContainer: {
    width: "100%",
    elevation: 10,
    backgroundColor: "#fff",
    padding: 10
  },
  taskBox:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderBlockColor:"grey",
    borderWidth:1,
    gap:5,
    padding:4
  },
  taskMainWrapper:{
    gap:10,
    marginTop:7
  }
})