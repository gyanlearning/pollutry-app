import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { getEndDays } from '../../utils/getEndDays';
import { useNavigation } from '@react-navigation/native';


interface BatchFlatCardProps {
  startedDate: string,
  closeTime: string,
  Quantity: number,
  combletedTask: number
}
export default function BatchFlatCard({ startedDate, closeTime, Quantity, combletedTask }: BatchFlatCardProps) {
  const daysLeft = getEndDays({ start: startedDate, end: moment(closeTime).format('YYYY-MM-DD') })
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.activeBatchCard} onPress={()=>navigation.navigate("dailyTask")}>
      <View>
        <View style={styles.cardItemWrapper}>
          <Text style={styles.cardTextBold}>Start at :
            <Text style={styles.cardTextSmall}>{moment(startedDate).format('YYYY-MM-DD')} </Text></Text>
          <Text style={styles.cardTextBold}>End in
            <Text style={styles.cardTextSmall}> {daysLeft} days</Text></Text>
        </View>
        <View style={styles.cardItemWrapper}>
          <Text style={styles.cardTextBold}>Quantity <Text style={styles.cardTextSmall}> {Quantity}</Text></Text>
          <Text style={styles.cardTextBold}>Completed task <Text style={styles.cardTextSmall}> {combletedTask} </Text></Text>
        </View>
      </View>
      {
        daysLeft != "0"
          ?
          <Text style={styles.status}>Ongoing</Text>
          :
          <Text style={styles.endStatus}>Finish</Text>
      }

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  activeBatchCard: {
    height: 60,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 20,
    padding: 5,
    marginTop: 10,
    borderColor: "#1abc9c",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  cardTextBold: {
    fontSize: 11,
    fontWeight: "700",
    color: "black"
  },
  cardTextSmall: {
    fontSize: 10,
    fontWeight: "700",
    color: "gray"
  },
  cardItemWrapper: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 10,
    marginTop: 6
  },
  status: {
    color: "#1abc9c",
    fontWeight: "700",
    marginTop: 10,
    fontSize: 14,
    marginHorizontal: 10
  },
  endStatus: {
    color: "red",
    fontWeight: "700",
    marginTop: 10,
    fontSize: 14,
    marginHorizontal: 10
  }
})