import { RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '../components/layout/AppHeader'
import { style } from '../styles/styles'
import Icon from 'react-native-vector-icons/AntDesign'

import BatchFlatCard from '../components/shared/BatchFlatCard'
import { useSelector } from 'react-redux'
import { getBatchList } from '../services'

export default function Home() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [isActiveTabSelected, setIsActiveTabSelected] = useState(true);
  const [batchList, setBatchList] = useState([])
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const token = useSelector((state: any) => state.auth.user)

  async function getBatchData() {
    try {
      
      const res = await getBatchList(token?.acessToken);
      setBatchList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useMemo(()=>{
getBatchData()
  },[isActiveTabSelected])
  return (
    <SafeAreaView>
      <AppHeader />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.Container}>
          <View>
            <View style={styles.batchCardContainer}>
              <TouchableOpacity
                style={isActiveTabSelected ? styles.activeBatchCard : styles.batchCard}
                onPress={() => setIsActiveTabSelected(true)}
              >
                <View >
                  <Icon name='clockcircleo' size={20} color={isActiveTabSelected ? "white" : "black"} />
                  <Text style={isActiveTabSelected 
                    ? { color: "white", marginTop: 6 }
                     : { color: "black", marginTop: 6 }}>All Batch</Text>
                </View>
                <Text style={isActiveTabSelected ?
                   { color: "white", marginTop: 6 } 
                   : { color: "black", marginTop: 6 }}>{batchList.length}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={isActiveTabSelected ? styles.batchCard : styles.activeBatchCard}
                onPress={() => setIsActiveTabSelected(false)}
              >
                <View>
                  <Icon name='clockcircleo' size={20} color={isActiveTabSelected ? "black" : "white"}
                    onPress={() => setIsActiveTabSelected(false)}
                  />
                  <Text style={isActiveTabSelected 
                    ? { color: "black", marginTop: 6 } 
                    : { color: "white", marginTop: 6 }}>Active  Batch</Text>
                </View>
                <Text style={isActiveTabSelected ? 
                  { color: "black", marginTop: 6 }
                   : { color: "white", marginTop: 6 }}>{batchList.length}</Text>
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.taskContainer}>
            <Text style={style.headingText}>
                {isActiveTabSelected?"All  Batches":"Active Batches"}
            </Text>
            <View style={styles.listBoxWrapper}>
              {
                batchList.map((batch,index)=>(
                  <BatchFlatCard key={index} 
                  startedDate={batch.started_date} 
                  closeTime={batch.close_date}
                  Quantity={batch.availble_quantity}
                  combletedTask={batch.todo.length}
                  />
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

    padding: 10,

    marginTop: 10
  },
  taskBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBlockColor: "grey",
    borderWidth: 1,
    gap: 5,
    padding: 4
  },
  taskMainWrapper: {
    gap: 10,
    marginTop: 7
  },
  batchCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5
  },
  batchCard: {
    height: 60,
    width: 160,
    backgroundColor: "white",
    elevation: 4,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 5
  },
  activeBatchCard: {
    height: 60,
    width: 160,
    backgroundColor: "#1abc9c",
    elevation: 4,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 5
  }
})