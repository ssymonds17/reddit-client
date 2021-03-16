import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import PostLoading from '../Post/PostLoading';
import { fetchPosts } from '../../store/redditSlice';

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const { posts, isLoading, error, selectedSubreddit } = reddit;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  if (isLoading) {
    return (
      <>
        <PostLoading />
        <PostLoading />
        <PostLoading />
        <PostLoading />
      </>
    );
  }

  if (error) {
    return (
      <div className='error'>
        <h2>Failed to load posts.</h2>
        <button
          type='button'
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Home;
