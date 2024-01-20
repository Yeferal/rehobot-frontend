import axios, { AxiosRequestConfig } from 'axios';

const URL_API = "http://localhost:13573/hardware-store/api/v1/auth";
const token = `eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ5ZWZlcmFsIiwiaWF0IjoxNjg2NjMyMTAxLCJleHAiOjE2ODY2MzQ2OTN9.nmag5pksy3G9SlI-bAUegcwKbft76qCc_vvBsE_svtljaI7p37IBQnTlwQHySJab`

const apiConfig: AxiosRequestConfig = {
    baseURL: URL_API,
    // timeout: 5000, // Tiempo máximo de espera para la respuesta en milisegundos
    headers: {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5ZWZlcmFsIiwiaWF0IjoxNjg2NTMwMjA3LCJleHAiOjE2ODY1MzI3OTl9.MHkb_vvVaUSWp1BjMA7Qk3LQdu4iyeZZg6Ya7YO4wkw', // Encabezado de autorización
        
    },
    withCredentials: true,
    // Otros parámetros de configuración
};

const api = axios.create(apiConfig);

export const postLoginTest = async () => {
    try {
        const response = await api.post(`/authenticate`,{
            username: "yeferal",
            password: "123456"
        });
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const getTest = async () => {
    try {
        const response = await api.get(`/test`, {
            headers: {
                Authorization: "Bearer "+token
            },
            withCredentials: true
        });
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud GET');
    }
}