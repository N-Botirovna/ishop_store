import apiConfig from '../config/apiConfig';
import axios from 'axios';

const apiService = {
  get: async (endpoint) => {
    try {
      const response = await axios.get(`${apiConfig.apiUrl}/${endpoint}`, {
        headers: {
          'X-API-Key': apiConfig.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('API Request Error');
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${apiConfig.apiUrl}/${endpoint}`, data, {
        headers: {
          'X-API-Key': apiConfig.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('API Request Error');
    }
  },

  // ..........................

};

export default apiService;