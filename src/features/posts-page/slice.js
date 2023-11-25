import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

const NAMESPACE = 'postsPage';
const initialState = {
  posts: [],
  loading: false,
  error: undefined,
}

export const fetchPostsList = createAsyncThunk(
  `${NAMESPACE}/fetch`,
  async () => {
    return await api.posts.load();
  }
)

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
  },
});

export default postListSlice.reducer;