import _ from 'lodash';
import axios from 'axios';

const axiosDefaults = {};

function requestInterceptor(axiosConfig) {
  return _.extend(axiosConfig, {
    url: `https://conduit.productionready.io${axiosConfig.url}`,
  });
}

const baseRequest = axios.create(axiosDefaults);
baseRequest.interceptors.request.use(requestInterceptor);

export default baseRequest;
