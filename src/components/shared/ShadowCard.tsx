import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ShadowCard({children}:any) {
  return (
    <View style={styles.Card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  Card: {
        height:"100%",
        width: "99%",
        backgroundColor: "white",
        elevation: 4,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 5
      },
})