import axios, { AxiosRequestConfig } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import store from '@/store/store';

const apiConfig: AxiosRequestConfig = {
  // timeout: 5000, // Tiempo máximo de espera para la respuesta en milisegundos
  headers: {
      'Content-Type': 'application/json',
  },
  withCredentials: true,
  // Otros parámetros de configuración
};

const axiosInstance = axios.create(apiConfig);

// Agrega el interceptor
axiosInstance.interceptors.request.use((config) => {
  // Obtiene el token almacenado en el estado de Redux
  const token = store.getState().auth.token;

  // Verifica si hay un token y lo agrega al encabezado de la solicitud
  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export function createInstance() {
  const axiosInstanceNew = axios.create(apiConfig);
  // Agrega el interceptor
  axiosInstanceNew.interceptors.request.use((config) => {
  // Obtiene el token almacenado en el estado de Redux
  const token = store.getState().auth.token;
    // Verifica si hay un token y lo agrega al encabezado de la solicitud
    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  });

  return axiosInstanceNew;
}

export default axiosInstance;





