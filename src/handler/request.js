import axios from "axios";


export async function get(url, headers) {
    let response={};
    try {
       
        const res = await axios.get(url, {

            headers: headers ? headers : { 'Content-Type': 'application/json' }
        })

        return res.data;
    } catch (error) {

        if(error.response){
            return error.response.data;
        }

        return {
            message:error.message,
            status:500
        };
    }
}
export async function post(url, data, headers) {
    let response={}
    try {
        const res = await axios.post(url, data, {
            headers: headers ? headers : {
                'Content-Type': 'application/json'
            }
        });
        
        return res.data;
    } catch (error) {
        
        if(error.response){
            return error.response.data;
        }

        return {
            message:error.message,
            status:500
        };
    }
}export async function putRequest(url,data, headers) {
    let response={}
    try {
 
        const res = await axios.put(url,  
            data,
            {
            headers: headers ? headers : {
                'Content-Type': 'application/json'
            }
        });
       
        return res.data;
    } catch (error) {
        
        if(error.response){
            return error.response.data;
        }

        return {
            message:error.message,
            status:500
        };
    }
}
