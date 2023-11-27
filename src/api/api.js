import axios from 'axios';
import { API_URL } from '../constants/constants';

export default {
  posts: {
    load: () => {
      const options = {
        method: 'GET',
        url: `${API_URL}/posts`,
      };
      return axios.request(options)
        .then((res) => res.data)
        .catch((error) => {
          console.error('Error during API request:', error);
          throw error;
        });
    },
  },
  users: {
    load: () => {
      const options = {
        method: 'GET',
        url: `${API_URL}/users`,
      };
      return axios.request(options)
        .then((res) => res.data)
        .catch((error) => {
          console.error('Error during API request:', error);
          throw error;
        });
    },
  },
  comment: {
    load: (id) => {
      const options = {
        method: 'GET',
        url: `${API_URL}/posts/${id}/comments`,
      };
      return axios.request(options)
        .then((res) => res.data)
        .catch((error) => {
          console.error('Error during API request:', error);
          throw error;
        });
    },
  },
};