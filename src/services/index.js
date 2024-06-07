import { getBaseDomain } from "../handler";
import { get, post } from "../handler/request";

export const loginCompany = async (data) => {
    try {
        const res = await post(`${getBaseDomain()}/company/login`, data);
        return res;
    } catch (error) {
        return error;
    }
}
export const getBatchList = async (token) => {
    try {

        const response = await get(`${getBaseDomain()}/batch/lists`, { Authorization: token });

        return response

    } catch (error) {
        console.log(error)
        return error;
    }
}
export const createNewBatch = async (token, data) => {
    try {
        const res = await post(`${getBaseDomain()}/batch/create-batch`, data, { Authorization: token });
        return res;
    } catch (error) {
        return error;
    }
}