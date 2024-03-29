import axios from "axios";
import { AxiosMethod } from "../API.types";

const path = "https://localhost:44315/api/foodsavr/";

export const api = async (
  route: string,
  method: AxiosMethod,
  data?: number[]
) => {
  try {
    const url = path + route;

    const response = await axios({
      method: method,
      url: url,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
      data: data && JSON.stringify(data),
      withCredentials: true,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
