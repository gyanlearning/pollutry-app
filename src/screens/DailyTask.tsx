import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import ShadowCard from '../components/shared/ShadowCard';

export default function DailyTask() {
  const [isActiveTabSelected, setIsActiveTabSelected] = useState(true);
  return (
    <View>
      <View style={styles.batchCardContainer}>
        <TouchableOpacity
          style={isActiveTabSelected ? styles.activeBatchCard : styles.batchCard}
          onPress={() => setIsActiveTabSelected(true)}
        >

          <Icon name='checksquareo' size={20} color={isActiveTabSelected ? "white" : "black"} />
          <Text style={isActiveTabSelected
            ? { color: "white", marginTop: 6 }
            : { color: "black", marginTop: 6 }}>Today Taks</Text>


        </TouchableOpacity>
        <TouchableOpacity style={isActiveTabSelected ? styles.batchCard : styles.activeBatchCard}
          onPress={() => setIsActiveTabSelected(false)}
        >

          <Icon name='check' size={20} color={isActiveTabSelected ? "black" : "white"}
            onPress={() => setIsActiveTabSelected(false)}
          />
          <Text style={isActiveTabSelected
            ? { color: "black", marginTop: 6 }
            : { color: "white", marginTop: 6 }}>Completed Task</Text>


        </TouchableOpacity>

      </View>
      <ScrollView>
        <ShadowCard>

        </ShadowCard>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

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
    alignItems: "center",
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
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 5
  }
})