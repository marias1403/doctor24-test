import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const NAMESPACE = 'postsPage';
const initialState = {
  posts: [],
  users: {},
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
  reducers: {},
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

export default postListSlice.reducer;