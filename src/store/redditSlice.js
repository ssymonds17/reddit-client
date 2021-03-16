import { createSlice } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../api/Reddit';

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  selectedSubreddit: 'r/nba'
};

export const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    startGetPosts(state) {
      state.isLoading = true;
      state.error = false;
    },
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
    }
  }
});

export const {
  setPosts,
  getPostsFailed,
  getPostsSuccess,
  startGetPosts,
  setSelectedSubreddit
} = redditSlice.actions;

export default redditSlice.reducer;

// This is a Redux Thunk that gets posts from a subreddit.
export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(startGetPosts());
    const posts = await getSubredditPosts(subreddit);

    dispatch(getPostsSuccess(posts));
  } catch (error) {
    dispatch(getPostsFailed());
  }
};
