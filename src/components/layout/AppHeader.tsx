import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

export default function AppHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.rightWrapper}>
        <Text>Pollutry</Text>
        <Icon name='yuque' size={25} color={"#B6E0C7"} />
      </View>
      <View style={styles.rightWrapper}>
        <Text>Hi, Gaurav</Text>
        <Icon
          name='bells'
          color={"black"}
          size={20}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    elevation: 4,
    backgroundColor: "white",
    paddingTop: 13,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: "row"
  },
  rightWrapper: {
    flexDirection: 'row',
    justifyContent: "space-around",
    gap: 10
  }
})