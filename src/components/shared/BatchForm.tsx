import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { createNewBatch } from '../../services'
import { useMessage } from '../../hooks/useMessage'
import SpinnerLoader from '../loader/SpinnerLoader'

interface BatchFormProps {
    generatedId:string,
    currentDate:string,
    token:string,
    onclose():void
}

export default function BatchForm({  generatedId, currentDate, token, onclose }:BatchFormProps) {
    const { showMessage } = useMessage();
    const [loading, setLoading] = useState(false)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            quantity: 0,
            duration: 0,
            statred_date: ""
        },
    })
    const onSubmit = async (data:any) => {
        try {
            setLoading(true)
            const payload = {
                "batchId": generatedId,
                "quantity": data.quantity,
                "started_date": data.statred_date,
                "duration": data.duration
            };

            //console.log(payload);
            const response = await createNewBatch(token, payload);
            if (response.status == 201) {
                showMessage(response.mesage), "success";
                setLoading(false);
                onclose()
            }

            showMessage(response.message, "error");
            setLoading(false)
        } catch (error) {
            setLoading(false)
            showMessage("Newtwork error", "error")
            console.log(error);
        }
    }
    return (
        <View>

            <View style={styles.boxContainer}>
                {
                    loading ? <SpinnerLoader mesage={"Wait we are creating new batch"} />
                        :
                        <>
                            <Text style={styles.heading1}>Create a new batch </Text>
                            <View>
                                <Text>id: {generatedId}</Text>
                                <Text>Batch Started At: {currentDate.toString().slice(4, 16)}</Text>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            placeholder="Quantity"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={styles.inputBox}
                                            inputMode='numeric'
                                        />
                                    )}
                                    name="quantity"
                                />
                                {errors.quantity && <Text style={{ color: "red" }}>Quantity is required.</Text>}

                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            placeholder="Duration"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={styles.inputBox}

                                            inputMode='numeric'
                                        />
                                    )}
                                    name="duration"
                                />
                                {errors.duration && <Text style={{ color: "red" }}>Duration is required.</Text>}
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            placeholder="Started Date Ex: 25/06/2001"
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={styles.inputBox}

                                            inputMode='text'
                                        />
                                    )}
                                    name="statred_date"
                                />
                                {errors.statred_date && <Text style={{ color: "red" }}>Duration is required.</Text>}
                                <TouchableOpacity
                                    onPress={handleSubmit(onSubmit)}
                                    style={styles.loginBtn}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                }

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        height: "55%",
        paddingHorizontal: 20
    },
    heading1: {
        fontSize: 22,
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
        height: 35
    }
})