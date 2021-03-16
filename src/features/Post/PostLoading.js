import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './Post.css';

const PostLoading = () => {
  return (
    <article className='post-wrapper'>
      <Skeleton className='post-skeleton-author' />
      <Skeleton className='post-skeleton-title' />
      <Skeleton className='post-skeleton-image' />
      <Skeleton className='post-skeleton-footer' />
    </article>
  );
};

export default PostLoading;
