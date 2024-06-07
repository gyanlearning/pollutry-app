import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, Button, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export const Register = ({ navigation }) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            mobile: "",
            email: "",
            password: "",
            address: "",
            city: "",
            state: ""
        },
    })
    const onSubmit = (data) => console.log(data)

    return (
        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <View style={styles.backButttonWraper}>
                    <Icon name='left' size={27} color={"black"} onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.boxContainer}>
                    <Text style={styles.heading1}>Hello ! Register to get started.</Text>
                    <View style={styles.buttonWrapper}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="Company Name"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.inputBox}
                                    inputMode='text'
                                />
                            )}
                            name="name"
                        />
                        {errors.name && <Text style={{ color: "red" }}>Company Name is required.</Text>}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="Mobile Number"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.inputBox}
                                    inputMode='numeric'
                                />
                            )}
                            name="mobile"
                        />
                        {errors.mobile && <Text style={{ color: "red" }}>Phone number  is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="Email"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.inputBox}
                                    inputMode='email'
                                />
                            )}
                            name="email"
                        />

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="Address"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.inputBox}
                                    inputMode='text'
                                />
                            )}
                            name="address"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="City"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.inputBox}
                                    inputMode='text'
                                />
                            )}
                            name="city"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="State"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.inputBox}
                                    inputMode='text'
                                />
                            )}
                            name="state"
                        />
                        <Controller
                            control={control}
                            rules={{
                                maxLength: 100,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="Password"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.inputBox}
                                    secureTextEntry
                                    inputMode='text'
                                />
                            )}
                            name="password"
                        />
                        {errors.password && <Text style={{ color: "red" }}>Password is required.</Text>}
                        <TouchableOpacity
                            onPress={handleSubmit(onSubmit)}
                            style={styles.loginBtn}>
                            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "#34495e", fontSize: 14, fontWeight: "600", textAlign: "center", marginTop: 20 }}>Already have an account ?
                        <Text style={{ color: "#16a085", fontWeight: "bold" }} onPress={() => navigation.navigate("Login")}>Login here.</Text> </Text>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    screenContainer: {
        height: "100%",
        width: "100%",

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
        height: "85%",
        paddingHorizontal: 20
    },
    heading1: {
        fontSize: 29,
        color: "#34495e",
        textAlign: "left",
        fontWeight: '600'

    },
    backButttonWraper: {
        height: "10%",
        paddingTop: 30,
        paddingLeft: 20
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
        height: 40
    }
})