import React from 'react';
import Post from '../Post/Post';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from '../../store/counterSlice';
// import { action (e.g. increment, decrement) } from ../../store/stateSlice

const PostsList = () => {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // onClick={() => dispatch(increment())}

  return (
    <div>
      <Post />
    </div>
  );
};

export default PostsList;
