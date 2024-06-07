import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuthImage } from '../assets'

export default function AuthMenu({navigation}) {
  return (
    <View style={styles.screenContainer}>
          <View style={styles.container}>
              <Image
              source={AuthImage}
              style={styles.image}
              />
              <View style={styles.boxContainer}>
                   <Text  style={styles.heading1}>Welcome Back !</Text>
                  
                   <View style={styles.buttonWrapper}>
                       <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Login")}>
                        <Text style={{color:"white",fontSize:16,fontWeight:"600"}}>Login</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.registerBtn} onPress={()=>navigation.navigate("Register")}>
                        <Text style={{color:"black",fontSize:16,fontWeight:"600"}}>Register</Text>
                       </TouchableOpacity>
                   </View>
              </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screenContainer:{
        height:"100%",
        width:"100%",
        padding:1
    },
    image:{
        height:"40%",
        width:"100%"
    },
    container:{
        height:"100%",
        width:"100%",
        flexDirection:"column",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        shadowOffset:{
            width:1,
            height:2
        }
    },
    boxContainer:{
        height:"40%",
        paddingHorizontal:20
    },
    heading1:{
        fontSize:29,
        color:"#34495e",
        textAlign:"left",
        fontWeight:'600'

    },
    buttonWrapper:{
        paddingHorizontal:8,
        gap:20,
        marginTop:20
    },
    loginBtn:{
        backgroundColor:"#34495a",
        height:40,
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center"
    },
    registerBtn:{
        height:40,
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center",
        shadowOffset:{
            width:3,
            height:4
        },
        shadowColor:"black",
        borderColor:"#34495a",
        borderWidth:1
    }
})