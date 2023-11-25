import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts-page/slice';

export const store = configureStore({
  reducer: {
    postsReducer,
  },
})