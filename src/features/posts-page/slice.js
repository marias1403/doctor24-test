import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const NAMESPACE = 'postsPage';
const initialState = {
  posts: [],
  users: {},
  favorites: [],
  loading: false,
  error: undefined,
};

export const fetchPostsList = createAsyncThunk(
  `${NAMESPACE}/fetchPosts`,
  async () => {
    return await api.posts.load();
  }
);

export const fetchUsers = createAsyncThunk(
  `${NAMESPACE}/fetchUsers`,
  async () => {
    return await api.users.load();
  }
);

export const postListSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    deletePost: (state, action) => {
      const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: updatedPosts,
      };
    },
    addToFavorites: (state, action) => {
      const newFavPost = action.payload;
      const isItemInFavorites = state.favorites.some(post => post.id === newFavPost.id);
      if (!isItemInFavorites) {
        const newFavorites = [...state.favorites, newFavPost];
        return {
          ...state,
          favorites: newFavorites,
        };
      } else {
        const newFavorites = state.favorites.filter(post => post.id !== newFavPost.id);
        return {
          ...state,
          favorites: newFavorites,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPostsList.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.posts = action.payload;
      }
    });
    builder.addCase(fetchPostsList.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });

    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        let stateUsers = {};
        for (const user of action.payload) {
          stateUsers[user.id] = user;
        }
        state.users = stateUsers;
      }
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = {};
      state.error = action.error.message;
    });
  },
});

export const { deletePost, addToFavorites } = postListSlice.actions

export default postListSlice.reducer;