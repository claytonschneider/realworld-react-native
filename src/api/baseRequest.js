import axios from 'axios';

const axiosDefaults = {};

function requestInterceptor(axiosConfig) {
  axiosConfig.url = `https://conduit.productionready.io${axiosConfig.url}`;
  return axiosConfig;
}

const baseRequest = axios.create(axiosDefaults);
baseRequest.interceptors.request.use();

export default baseRequest;
