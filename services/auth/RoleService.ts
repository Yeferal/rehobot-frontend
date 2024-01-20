import axios, { AxiosRequestConfig } from 'axios';
import axiosInstance, { createInstance } from '../AxiosConfig';

const URL_API = "http://localhost:13573/hardware-store/api/v1/user";

const apiConfig: AxiosRequestConfig = {
    baseURL: URL_API,
    // timeout: 5000, // Tiempo máximo de espera para la respuesta en milisegundos
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    // Otros parámetros de configuración
  };

const api = createInstance();
api.defaults.baseURL = URL_API;

export const getRoles = async () => {
    try {
        const response = await api.get(`/roles`);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud GET');
    }
}

// export const getRole = async () => {
//     try {
//         const response = await api.get(`/`,);
//         return response
//     } catch (error) {
//         console.error('Error:', error);
//         throw new Error('Error al enviar la solicitud GET');
//     }
// }