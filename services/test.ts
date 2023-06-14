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

// api.interceptors.request.use((config) => {
//     const token = useSelector((state: RootState) => state.auth.token);
//     console.log(token);
//     // config.headers.Authorization = `Bearer ${token}`;
//     config.headers.Authorization = `${token}`;
//     return config;
// });

export const postLoginTest = async () => {
    try {
        const response = await api.post(`/authenticate`,{
            username: "yeferal",
            password: "123456"
        });
        // console.log('Respuesta:', response);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const getTest = async () => {
    try {
        
        // config.headers.Authorization = token;
        const response = await api.get(`/test`, {
            headers: {
                Authorization: "Bearer "+token
            },
            withCredentials: true
        });
        // console.log('Respuesta:', response);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud GET');
    }
}