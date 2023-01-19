import axios from "axios";

const axiosRequestObj = axios.create({
    baseURL: "http://3.6.37.16:8000/",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"},
})

const axiosRequest = {


    get: (url,headers) => {
        return axiosRequestObj.get(url,headers)
    },
    post: (url, data,headers) => {
       return axiosRequestObj.post(url,data,headers)
    }
}

export default axiosRequest;