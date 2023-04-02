import axoisInstance from '../assets/axios/axios';
import { API_URL } from '../assets/data/data';

export const authLogin = async (data) => {
  const myHeader = new Headers();
  const formData = new FormData();

  formData.append('email', data.email);
  formData.append('password', data.password);

  const config = {
    headers: myHeader,
  };

  return axoisInstance.post(API_URL, formData, config);
};
