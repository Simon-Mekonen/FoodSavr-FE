import axios from 'axios';
import { AxiosMethod } from '../API.types';

const path = 'https://localhost:44315/api/foodsavr/';

export const api = async (route: string, method: AxiosMethod, data?: number[]) => {
  try {
    const url = path + route

    data = [1, 2, 3, 4, 26]
    const response = await axios({
      method: method,
      url: url,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data && JSON.stringify(data),
      withCredentials: true,
    })
    return response.data;

  } catch (error) {
    console.error(error);
    return error;
  }
}