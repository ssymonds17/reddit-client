import React from 'react';
import moment from 'moment';
import { TiMessage } from 'react-icons/ti';
import './Post.css';

const Post = (props) => {
  const { post } = props;

  return (
    <article key={post.id} className='post-wrapper'>
      <header className='post-header'>
        <h3>{post.author}</h3>
        <h3>{moment.unix(post.created_utc).fromNow()}</h3>
      </header>
      <main className='post-main'>
        <h1>{post.title}</h1>
        <img src={post.url} alt='' className='post-image' />
      </main>
      <footer className='post-footer'>
        <TiMessage className='icon-action' />
        <p>{post.num_comments}</p>
      </footer>
    </article>
  );
};

export default Post;
