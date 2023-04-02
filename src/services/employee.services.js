import axios from 'axios';
import { GET_EMPLOYEE_URL } from '../assets/data/data';
import { getAuthenticationToken } from '../assets/utils/utils';

export const getAllEmpolyees = async (params) => {
  const token = getAuthenticationToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  };
  console.log('config API', config);
  return axios.get(`${GET_EMPLOYEE_URL}?page=${params.page}`, config);
};
