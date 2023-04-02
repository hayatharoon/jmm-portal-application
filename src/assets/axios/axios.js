import axios from 'axios';
import { API_URL } from '../data/data';
import { CONTENT_TYPE } from '../data/enums';

const axoisInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': CONTENT_TYPE,
  },
});

export default axoisInstance;
