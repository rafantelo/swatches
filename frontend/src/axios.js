import axios from 'axios';

const instance = axios.create({
  baseURL: "http://rafael-swatches-1844546927.us-east-2.elb.amazonaws.com/api",
  headers: {
    common: {
      "Content-Type" : "application/json"
    }
  }
});

instance.interceptors.request.use((request) => {
  return request;
}, 
(error) => {
  console.error("error: ", error);
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  return response;
}, 
(error) => {
  console.error("error: ", error);
  return Promise.reject(error);
});

export default instance;