import React, { useState } from 'react';
import { FaReddit } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import { setSelectedSubreddit } from '../../store/redditSlice';
import { useDispatch } from 'react-redux';
import './Header.css';

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
    setSearchTerm('');
  };

  return (
    <div className='header-wrapper'>
      <div className='icon-wrapper'>
        <FaReddit className='reddit-icon' />
      </div>
      <div className='form-wrapper'>
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
    </div>
  );
};

export default Header;
