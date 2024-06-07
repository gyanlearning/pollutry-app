import { createSlice } from "@reduxjs/toolkit";

import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {

    user: null,
    status: false,
}
const setData = async ({ data }) => {
    await AsyncStorage.setItem('data', data)
}
const removeUser=async()=>{
    await AsyncStorage.removeItem('data')
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.status = true;
            state.user = action.payload;
            setData({ data: JSON.stringify(state.user)});
        },
        logout(state){
            state.status=false;
            state.user=null;
            removeUser();
        }
    }
})
export const { login ,logout} = authSlice.actions;
export default authSlice.reducer;