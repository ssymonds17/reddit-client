import React from 'react';
import { FaReddit } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';

const Header = () => {
  return (
    <div>
      <FaReddit />
      <input placeholder='Search Here' />
      <button>
        <HiOutlineSearch />
      </button>
    </div>
  );
};

export default Header;
