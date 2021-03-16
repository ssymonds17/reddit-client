import React, { useState } from 'react';
import { FaReddit } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import { setSelectedSubreddit } from '../../store/redditSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    const termToSubmit = 'r/' + searchTerm.toLowerCase();
    dispatch(setSelectedSubreddit(termToSubmit));
  };

  return (
    <div>
      <FaReddit />
      <form className='search' onSubmit={onSearchTermSubmit}>
        <input
          type='text'
          placeholder='Search Here'
          value={searchTerm}
          onChange={onSearchTermChange}
          aria-label='Search Subreddits'
        />
        <button type='submit' aria-label='Search'>
          <HiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default Header;
