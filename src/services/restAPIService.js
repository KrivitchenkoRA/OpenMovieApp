import {create} from 'apisauce';

import {API_QUERY} from '../constants/config';

const API = create({
  baseURL: API_QUERY,
  headers: {
    Accept: 'application/json',
  },
  timeout: 30000,
});

export const getData = async param => {
  try {
    API.setBaseURL(`${API_QUERY}${param}`);
    const response = await API.get();
    return response;
  } catch (error) {
    console.warn('Error get data: ', error);
    return null;
  }
};
