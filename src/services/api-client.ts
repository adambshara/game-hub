import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "51639332b5794c188d89f6051880a7f5",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };
  // post = (data: T) => {
  //   return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  // };
}
export default APIClient;

// const axiosInstance = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });

// class APIClient<T> {
//   endpoint: string;

//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }
//   getAll = () => {
//     return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
//   };
//   post = (data: T) => {
//     return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
//   };
// }
// export default APIClient;
