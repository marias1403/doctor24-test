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
          console.error('Ошибка при получении постов:', error);
          throw error;
        });
    },
  },
  post: {
    create: (title, body, userId) => {
      const options = {
        method: 'POST',
        url: `${API_URL}/posts`,
        data: JSON.stringify({
          title,
          body,
          userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
      return axios(options)
        .then((res) => res.data)
        .catch((error) => {
          console.error('Ошибка при создании поста:', error);
          throw error;
        });
    },
    edit: () => {

    },
    delete: (id) => {
      const options = {
        method: 'DELETE',
        url: `${API_URL}/posts/${id}`,
      };
      return axios.request(options)
        .catch((error) => {
          console.error('Ошибка при удалении поста:', error);
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
          console.error('Ошибка при загрузке пользователей:', error);
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
          console.error('Ошибка при загрузке комментариев:', error);
          throw error;
        });
    },
  },
};