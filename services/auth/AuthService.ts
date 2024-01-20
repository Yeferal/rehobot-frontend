import { RootState } from '@/store/store';
import axios, { AxiosRequestConfig } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../AxiosConfig';

const URL_API = "http://localhost:13573/hardware-store/api/v1/auth";

const apiConfig: AxiosRequestConfig = {
    baseURL: URL_API,
    // timeout: 5000, // Tiempo máximo de espera para la respuesta en milisegundos
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    // Otros parámetros de configuración
  };

const api = axiosInstance;
api.defaults.baseURL = URL_API;

export const postLogin = async (data: any) => {
    try {
        const response = await axios.post(`/authenticate`,data, apiConfig);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud POST');
    }
}

export const getLogout = async () => {
    try {
        const response = await api.get(`/logout`);
        return response
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error al enviar la solicitud GET');
    }
}

export const getIsLogging = async () => {
    try {
        const response = await api.get(`/isLoggings`);
        return response
    } catch (error) {
        // console.error('Error:', error);
        // throw new Error('Error al enviar la solicitud GET');
        return false;
    }
}