import React from 'react';
import { FaReddit } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import { getSubredditPosts } from '../../api/Reddit';

const Header = () => {
  return (
    <div>
      <FaReddit />
      <input placeholder='Search Here' />
      <button onClick={() => console.log(getSubredditPosts('nba'))}>
        <HiOutlineSearch />
      </button>
    </div>
  );
};

export default Header;
