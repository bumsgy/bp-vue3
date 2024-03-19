import axios from 'axios';
import { HOST } from '@/utils/Host'

// Authorization: this.$http.defaults.headers.common.Authorization,
const instance = axios.create({
    baseURL: HOST,
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

const onSuccessRequest = (config) => {

    // if(config.authCheck) {
    //     let accessToken = window.sessionStorage.getItem('accessToken');
    //     if(accessToken === null || accessToken === undefined || accessToken.length == 0) {
    //         alert("로그인이 필요합니다.");
    //         window.location.href = "/";
    //         return true;
    //     }
    //     config.headers = {...config.headers, 'Authorization': `${accessToken}`}
    // }

    return config;
}
const onFailureRequest = (error) => {
    return Promise.reject(error);
}

instance.interceptors.request.use(onSuccessRequest, onFailureRequest);

const onSuccessResponse = (response) => {
    return response;
}

const onFailureResponse = (error) => {
    try {
        if(error.response.status === 401) {
            alert("로그인이 필요합니다.");
            window.location.href = "/";
            return;
        }
        if(error.response.status === 403) {
            alert("화면 접근 권한이 없습니다.");
            window.location.href = "/";
            return;
        }
    } catch (e) {
        console.log(e);
    }
    return Promise.reject(error);
}

instance.interceptors.response.use(onSuccessResponse, onFailureResponse);

export default instance;