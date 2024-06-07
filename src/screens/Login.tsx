import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { SecurityImage } from '../assets';
import { loginCompany } from '../services';
import { useDispatch } from 'react-redux';
import { login as LoginSlice} from '../redux/slice/authSlice';
import { useMessage } from '../hooks/useMessage.js';

export const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const { showMessage}=useMessage();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mobile: "",
      password: ""
    },
  })
  const onSubmit =async (data) =>{
    try {
      const response=await loginCompany(data);
      
      if(response.status===200){
          dispatch(LoginSlice(response.data));
          showMessage("Login Successfully","success");
          return navigation.navigate("Home")
      }
    return  showMessage(response.message,"warning")
    } catch (error) {
      console.log(error)
      return showMessage("Failed to login","warning")
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.screenContainer}>
        <View style={styles.container}>
          <Image
            source={SecurityImage}
            style={styles.image}
          />
          <View style={styles.boxContainer}>
            <Text style={styles.heading1}>Welcome Back ! Glad To See You Again.</Text>
            <View style={styles.buttonWrapper}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Mobile No ."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.inputBox}
                    inputMode='numeric'
                  />
                )}
                name="mobile"
              />
              {errors.mobile && <Text style={{ color: "red" }}>Mobile is required.</Text>}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.inputBox}
                    secureTextEntry
                  />
                )}
                name="password"
              />
              {errors.password && <Text style={{ color: "red" }}>password is required.</Text>}
              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={styles.loginBtn}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>Login</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: "#34495e", fontSize: 14, fontWeight: "600", textAlign: "center", marginTop: 20 }}>Don't have an account ?
              <Text style={{ color: "#16a085", fontWeight: "bold" }} onPress={()=>navigation.navigate("Register")}>Register here.</Text> </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    width: "100%",

  },
  image: {
    height: "35%",
    width: "100%"
  },
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 1,
      height: 2
    }
  },
  boxContainer: {
    height: "55%",
    paddingHorizontal: 20
  },
  heading1: {
    fontSize: 29,
    color: "#34495e",
    textAlign: "left",
    fontWeight: '600'

  },
  buttonWrapper: {
    paddingHorizontal: 8,
    gap: 10,
    marginTop: 20
  },
  loginBtn: {
    backgroundColor: "#34495a",
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  registerBtn: {
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 3,
      height: 4
    },
    shadowColor: "black",
    borderColor: "#34495a",
    borderWidth: 1
  },
  inputBox: {
    elevation: 1,
    paddingHorizontal: 10,
    borderRadius: 1,
    height: 45
  }
})