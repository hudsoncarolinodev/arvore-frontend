
import axios, {AxiosResponse } from 'axios';
import {getBookshelvesUseCase} from '../useCase/getBookshelvesUseCase'
import {searchBookshelvesUseCase} from '../useCase/searchBookshelvesUseCase'

const apiKey = import.meta.env.VITE_API_KEY;
const userId = import.meta.env.VITE_USER_ID;
const apiUrl = import.meta.env.VITE_API_URL;
const axiosInstance = axios.create({ baseURL: apiUrl });

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const api = {
    
    async getBookshelves(idShelves): Promise<AxiosResponse> {
      const endpoint = `users/${userId}/bookshelves/${idShelves}/volumes`;
      const parameters = {
        key: apiKey,
      };
      const response = await axiosInstance.get(endpoint, {
        headers: { 'Content-Type': 'application/json' },
        params: parameters,
      })
      return getBookshelvesUseCase(response);
    },
  
    async searchBooks(query: string): Promise<AxiosResponse> {
      const endpoint = 'volumes';
      const parameters = {
        q: `search+${query}`,
        key: apiKey,
      };
      
      const response = await axiosInstance.get(endpoint, {
        headers: { 'Content-Type': 'application/json' },
        params: parameters,
      })
      return searchBookshelvesUseCase(response)
    },
    
};