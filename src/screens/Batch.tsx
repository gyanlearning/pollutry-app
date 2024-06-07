import { Image, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign'

import { Hen } from '../assets'
import BatchForm from '../components/shared/BatchForm';
import { getBatchList } from '../services'
import { useSelector } from 'react-redux'
import BatchCard from '../components/shared/BatchCard'
const passKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZYabcdefghijklmnopqrst1234577899@12#$%^$"
const today = new Date();

export default function Batch() {
  const [openForm, setOpenForm] = useState(false);
  const [batchId, setBatchedId] = useState("");
  const [batchList, setBatchList] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  function generateBatchId() {
    // Get the current timestamp (UNIX time in milliseconds)
    const timestamp = new Date().getTime();

    // Generate a random 4-digit number
    const randomDigits = Math.floor(Math.random() * 10);

    // Combine timestamp and random digits to create the batch ID
    const batchId = `batch${timestamp}${randomDigits}`;

    return batchId;
  }
  const handleOpen = () => {
    setOpenForm(!openForm)

    return setBatchedId(generateBatchId())
  }
  const token = useSelector((state: any) => state.auth.user)

  async function getBatchData() {
    try {
      
      const res = await getBatchList(token?.acessToken);
      setBatchList(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBatchData()
  }, [refreshing,openForm])
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text>Batch List : {batchList && batchList.length} </Text>
          <View style={styles.addBtnWrapper} >
            <Icon name='plus' size={15} color={"white"} />
            <Text style={{ color: "white", fontSize: 13 }} onPress={handleOpen}>Add New </Text>
          </View>

        </View>
        {
          openForm ?
            <View style={styles.formContainer}>
              <BatchForm  generatedId={batchId} currentDate={today} token={token?.acessToken} onclose={()=>setOpenForm(false)} />
            </View>
            : null
        }
        <ScrollView  
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        >
          <View style={styles.batchListContainer}>
            {
              batchList && batchList.length > 0 ?
                batchList.map((batch,index) => (
                 <BatchCard data={batch} index={index}  key={index} />
                ))

                :
                <Text>Not found?</Text>
            }
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    height: "100%",
    width: "100%",

    padding: 10,
    position: "relative"

  },
  headerContainer: {
    height: 45,
    width: "100%",
    elevation: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  addBtnWrapper: {
    flexDirection: 'row',
    gap: 10,
    alignItems: "center",
    backgroundColor: "#3F6EFA",
    padding: 4,
    borderRadius: 5
  },
  batchListContainer: {
    height: "100%",
    width: "100%",

    marginTop: 10,
    rowGap: 10,
    justifyContent: 'space-between'
  },
  batchListBox: {
    backgroundColor: "white",
    elevation: 10,
    height: 120,
    borderRadius: 6,
    padding: 10
  },
  boxListHeader: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5
  },
  image: {
    height: "100%",
    width: "13%"
  },
  formContainer: {
    position: "absolute",
    top: 70,
    left: 15,
    zIndex: 999,
    backgroundColor: "#ffff",
    elevation: 10,
    height: 500,
    width: "99%"
  }
})