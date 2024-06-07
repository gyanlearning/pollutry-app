import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SpinnerLoader({mesage}) {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
            <Text style={styles.messageText}>{mesage}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        
        alignItems:"center"
    },
    horizontal: {
        
        justifyContent: 'space-around',
        padding: 10,
        flexDirection:"column",
    },
    messageText:{
        fontSize:18,
        fontWeight:"700"
    }
});