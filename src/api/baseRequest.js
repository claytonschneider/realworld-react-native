import axios from 'axios';

const axiosDefaults = {};

const baseRequest = axios.create(axiosDefaults);

export default baseRequest;
